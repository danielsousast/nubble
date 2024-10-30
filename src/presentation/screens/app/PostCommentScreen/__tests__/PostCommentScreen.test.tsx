import React from 'react';
import {Alert, AlertButton} from 'react-native';
import {
  cleanup,
  fireEvent,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import {PostCommentScreen} from '../PostCommentScreen';
import {Routes} from '@/main/navigator';
import {authCredentialsStorage} from '@/presentation/providers';
import {mockedPostComment, server} from '@/test/server';
import {resetInMemoryResponse} from '@/test/server/PostComment/handler';
import {renderScreen} from '@/test/utils';

beforeAll(() => {
  jest.useFakeTimers();
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  resetInMemoryResponse();
  cleanup();
});

afterAll(() => {
  server.close();
  jest.useRealTimers();
});

describe('Integration Test - PostCommentScreen', () => {
  test('should update comments list when new comment is created', async () => {
    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: Routes.POST_COMMENTS,
          key: 'key',
          params: {
            postId: 0,
            postAuthorId: 0,
          },
        }}
      />,
    );

    expect(await screen.findByText(/comentário aleatório/i)).toBeTruthy();

    const inputMessage = await screen.findByPlaceholderText(
      /Adicione um comentário/i,
    );
    fireEvent.changeText(inputMessage, 'novo comentário');
    fireEvent.press(await screen.findByText(/Enviar/i));

    expect(await screen.findByText(/novo comentário/i)).toBeTruthy();
  });

  test('should be able to delete comment', async () => {
    jest
      .spyOn(authCredentialsStorage, 'get')
      .mockResolvedValue(mockedPostComment.jhonAuthCredentials);

    let mockedConfirm: AlertButton['onPress'];
    const mockedAlert = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((_title, _message, buttons) => {
        mockedConfirm = buttons![0].onPress;
      });

    renderScreen(
      <PostCommentScreen
        navigation={{} as any}
        route={{
          name: Routes.POST_COMMENTS,
          key: 'key',
          params: {
            postId: 0,
            postAuthorId: 0,
          },
        }}
      />,
    );

    const comment = await screen.findByText(
      mockedPostComment.jhonCommentAPI.message,
      {exact: false},
    );

    fireEvent(comment, 'longPress');
    expect(mockedAlert).toHaveBeenCalled();

    if (mockedConfirm) {
      mockedConfirm();
    } else {
      console.error('mockedConfirm não definido');
    }

    await waitForElementToBeRemoved(() =>
      screen.queryByText(mockedPostComment.jhonCommentAPI.message, {
        exact: false,
      }),
    );

    expect(mockedAlert).toHaveBeenCalled();
    const commentList = await screen.findAllByTestId('post-comment-item');
    expect(commentList.length).toBe(1);

    await waitFor(() => {
      expect(screen.getByTestId('toast')).toBeTruthy();
    });

    act(() => jest.runAllTimers());
    expect(screen.queryByTestId('toast')).toBeFalsy();
  });
});

import React from 'react';
import {cleanup, screen} from '@testing-library/react-native';
import {PostCommentScreen} from '../PostCommentScreen';
import {Routes} from '@/main/navigator';
import {server} from '@/test/server';
import {renderScreen} from '@/test/utils';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  server.close();
});

describe('Itegration Test - PostCommentScreen', () => {
  test('should render correctly', async () => {
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

    expect(await screen.findByText(/comentário aleatório/)).toBeTruthy();
  });
});

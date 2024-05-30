import React from 'react';
import {fireEvent, screen} from '@testing-library/react-native';
import {PostBottom} from '../PostBottom';
import {renderWithTheme} from '@/test/utils';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

interface RenderSutProps {
  commentCount?: number;
}

function renderSut({commentCount = 1}: RenderSutProps) {
  renderWithTheme(
    <PostBottom
      text={'text'}
      author={{
        profileURL: 'https://example.com',
        name: 'John Doe',
        userName: 'johndoe',
        id: 0,
      }}
      commentCount={commentCount}
      id={0}
    />,
  );
}

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render correctly', () => {
    renderSut({});
  });
  //should not show the comment link when commentCount is 0
  test('should not show the comment link when commentCount is 0', () => {
    renderSut({commentCount: 0});
    expect(screen.queryByText(/comentário/)).toBeNull();
  });

  test('should navigate to post comments when comment link is pressed', () => {
    renderSut({commentCount: 1});
    const commentLink = screen.getByText(/comentário/i);
    fireEvent.press(commentLink);
    // expext call navigate with the correct params
    expect(mockedNavigate).toHaveBeenCalledWith('PostComments', {
      postId: 0,
      postAuthorId: 0,
    });
  });
});

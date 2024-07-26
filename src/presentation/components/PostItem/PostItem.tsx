import React from 'react';
import {Box} from '../Box/Box';
import {UserItem} from '../UserItem/UserItem';
import {PostActions} from './PostActions';
import {PostBottom} from './PostBottom';
import {PostImage} from './PostImage';
import {Post} from '@/domain/post';

interface Props {
  post: Post;
}
export function PostItem({post}: Props) {
  return (
    <Box marginBottom="s32" paddingHorizontal="s24">
      <UserItem
        name={post.author.name}
        userId={post.author.id}
        profileURL={post.author.profileURL}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
      <PostBottom
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}

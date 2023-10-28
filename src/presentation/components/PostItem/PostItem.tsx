import React from 'react';
import {Box} from '../Box/Box';
import {PostActions} from './PostActions';
import {PostHeader} from './PostHeader';
import {PostImage} from './PostImage';
import {Post} from '@/domain/post';

interface Props {
  post: Post;
}
export function PostItem({post}: Props) {
  return (
    <Box marginBottom="s24" paddingHorizontal="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}

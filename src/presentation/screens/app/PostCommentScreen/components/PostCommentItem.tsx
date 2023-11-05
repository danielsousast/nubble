import React from 'react';
import {PostComment} from '@/domain/postComment';
import {Box, ProfileAvatar, Text} from '@/presentation/components';

interface Props {
  postComment: PostComment;
}
export function PostCommentItem({postComment}: Props) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <ProfileAvatar imageURL={postComment.author.profileURL} />
      <Box ml="s12" flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message} {postComment.createdAtRelative}
        </Text>
      </Box>
    </Box>
  );
}

import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Post} from '@/domain/post';
import {AppStackParamList, Routes} from '@/main/navigator';
import {Box, Text} from '@/presentation/components';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'>;

export function PostBottom({author, text, commentCount, id}: Props) {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();
  const commentText = getCommentText(commentCount);

  function navigateToPostComments() {
    navigation.navigate(Routes.POST_COMMENTS, {
      postId: id,
      postAuthorId: author.id,
    });
  }

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {author.userName}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {commentText && (
        <Text
          mt="s8"
          preset="paragraphSmall"
          bold
          color="primary"
          onPress={navigateToPostComments}>
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}

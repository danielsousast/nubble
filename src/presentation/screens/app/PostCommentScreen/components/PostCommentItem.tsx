import React from 'react';
import {Alert, Pressable} from 'react-native';
import {
  PostComment,
  postCommentService,
  usePostCommentRemove,
} from '@/domain/postComment';
import {Box, ProfileAvatar, Text} from '@/presentation/components';
import {useToastAction} from '@/presentation/hooks/toast/useToast';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}
export function PostCommentItem({
  postComment,
  onRemoveComment,
  userId,
  postAuthorId,
}: Props) {
  const isAllowToDelete = postCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );
  const {showToast} = useToastAction();
  const {mutate} = usePostCommentRemove({onSuccess: onRemove});

  function onRemove() {
    onRemoveComment();
    showToast({
      message: 'Comentário removido',
      type: 'success',
    });
  }

  function confirmRemove() {
    Alert.alert('Deseja excluir o comentário?', 'pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable disabled={!isAllowToDelete} onLongPress={confirmRemove}>
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
    </Pressable>
  );
}

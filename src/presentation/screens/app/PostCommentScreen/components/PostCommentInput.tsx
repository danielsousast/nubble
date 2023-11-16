import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {usePostCommentCreate} from '@/domain/postComment';
import {TextMessage} from '@/presentation/components';

interface Props {
  postId: number;
}
export function PostCommentInput({postId}: Props) {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: onSuccessfulComment,
  });

  function onSuccessfulComment() {
    setMessage('');
    Keyboard.dismiss();
  }

  async function onPressSend() {
    await createComment(message);
  }

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
}

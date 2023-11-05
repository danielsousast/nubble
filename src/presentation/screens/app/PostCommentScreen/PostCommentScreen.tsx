import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostCommentItem} from './components/PostCommentItem';
import {SeeMorePostsButton} from './components/SeeMorePostsButton';
import {AppScreenProps} from '@/common/@types';
import {PostComment, usePostCommentList} from '@/domain/postComment';
import {Routes} from '@/main/navigator';
import {Box, Screen, TextMessage} from '@/presentation/components';
import {useAppSafeArea} from '@/presentation/hooks';

export function PostCommentScreen({
  route,
}: AppScreenProps<Routes.POST_COMMENTS>) {
  const {bottom} = useAppSafeArea();
  const postId = route?.params?.postId;
  const {
    list: postCommentList,
    fetchNextPage,
    hasNextPage,
  } = usePostCommentList(postId);
  const [message, setMessage] = useState('');

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }
  function onPressSend() {}

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          data={postCommentList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: bottom}}
          ListFooterComponent={
            <SeeMorePostsButton
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          }
        />
        <TextMessage
          placeholder="Adicione um comentário"
          onPressSend={onPressSend}
          value={message}
          onChangeText={setMessage}
        />
      </Box>
    </Screen>
  );
}

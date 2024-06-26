import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {PostCommentInput} from './components/PostCommentInput';
import {PostCommentItem} from './components/PostCommentItem';
import {SeeMorePostsButton} from './components/SeeMorePostsButton';
import {AppScreenProps} from '@/common/@types';
import {useAuthCredentials} from '@/domain/auth';
import {PostComment, usePostCommentList} from '@/domain/postComment';
import {Routes} from '@/main/navigator';
import {Box, Screen} from '@/presentation/components';
import {useAppSafeArea} from '@/presentation/hooks';

export function PostCommentScreen({
  route,
}: AppScreenProps<Routes.POST_COMMENTS>) {
  const {bottom} = useAppSafeArea();
  const postId = route?.params?.postId;
  const postAuthorId = route.params.postAuthorId;
  const {user} = useAuthCredentials();

  const {
    list: postCommentList,
    fetchNextPage,
    hasNextPage,
    refresh: refreshComments,
  } = usePostCommentList(postId);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postComment={item}
        onRemoveComment={refreshComments}
        userId={user?.id as number}
        postAuthorId={postAuthorId}
        postId={postId}
      />
    );
  }

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
        <PostCommentInput postId={postId} />
      </Box>
    </Screen>
  );
}

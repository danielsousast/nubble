import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useScrollToTop} from '@react-navigation/native';
import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';
import {AppTabScreenProps} from '@/common/@types';
import {usePostList, Post} from '@/domain';
import {Routes} from '@/main/navigator';
import {Screen, PostItem} from '@/presentation/components';

export function HomeScreen(_props: AppTabScreenProps<Routes.HOME>) {
  const flatListRef = React.useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);
  const {
    list: posts,
    isLoading,
    isError,
    refresh,
    fetchNextPage,
  } = usePostList();

  function renderPost({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screenStyle}>
      <HomeHeader />
      <FlatList
        ref={flatListRef}
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{
          flex: posts?.length === 0 ? 1 : undefined,
        }}
        ListEmptyComponent={
          <HomeEmpty refetch={refresh} error={isError} loading={isLoading} />
        }
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        refreshing={isLoading}
      />
    </Screen>
  );
}

const $screenStyle: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};

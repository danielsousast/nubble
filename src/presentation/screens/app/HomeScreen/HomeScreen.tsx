import React, {useEffect} from 'react';
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';
import {AppTabScreenProps} from '@/common/@types';
import {postService, Post} from '@/domain/post';
import {Routes} from '@/main/navigator';
import {Screen, PostItem} from '@/presentation/components';

export function HomeScreen(_props: AppTabScreenProps<Routes.HOME>) {
  const [posts, setPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const reponse = await postService.getList();
      setPosts(reponse);
    }

    loadPosts();
  }, []);

  function renderPost({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screenStyle}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPost}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const $screenStyle: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};

import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Post} from '@/domain/post';
import {Routes} from '@/main/navigator';
import {Box, ProfileAvatar, Text} from '@/presentation/components';

type Props = Pick<Post, 'author'>;
export function PostHeader({author}: Props) {
  const navigation = useNavigation();

  function navigateTpProfile() {
    navigation.navigate(Routes.PROFILE, {userId: author.id});
  }

  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={author.profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}

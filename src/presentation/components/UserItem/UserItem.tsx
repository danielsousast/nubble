import React from 'react';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '@/main/navigator';
import {
  Box,
  ProfileAvatar,
  ProfileAvatarProps,
  Text,
} from '@/presentation/components';

type Props = {
  name: string;
  profileURL: string;
  userId: number;
  onPress?: () => void;
  avatarProps?: Omit<Partial<ProfileAvatarProps>, 'imageURL'>;
  RightComponent?: React.ReactElement;
};
export function UserItem({
  name,
  profileURL,
  userId,
  onPress,
  avatarProps,
  RightComponent,
}: Props) {
  const navigation = useNavigation();

  function handleOnPress() {
    if (onPress) {
      onPress();
    }
    navigation.navigate(Routes.PROFILE, {userId});
  }

  return (
    <Pressable onPress={handleOnPress}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar {...avatarProps} imageURL={profileURL} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {name}
        </Text>
      </Box>
      {RightComponent}
    </Pressable>
  );
}

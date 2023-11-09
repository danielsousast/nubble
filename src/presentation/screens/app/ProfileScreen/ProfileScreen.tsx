import React from 'react';
import {AppScreenProps} from '@/common/@types';
import {useUserGetById} from '@/domain/user';
import {Routes} from '@/main/navigator';
import {
  ActivityIndicator,
  Box,
  ProfileAvatar,
  Screen,
  Text,
} from '@/presentation/components';

export function ProfileScreen({route}: AppScreenProps<Routes.PROFILE>) {
  const userId = route.params?.userId;
  const {loading, error, user} = useUserGetById(userId);

  return (
    <Screen canGoBack>
      {loading && <ActivityIndicator />}
      {error && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}

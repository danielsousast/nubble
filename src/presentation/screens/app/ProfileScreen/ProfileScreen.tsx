import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';
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
  const {isLoading, isError, user, isFetching, refetch} =
    useUserGetById(userId);

  return (
    <Screen canGoBack flex={1}>
      {isLoading && <ActivityIndicator />}
      {isError && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <ScrollView
          style={{flex: 1}}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }>
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
        </ScrollView>
      )}
    </Screen>
  );
}

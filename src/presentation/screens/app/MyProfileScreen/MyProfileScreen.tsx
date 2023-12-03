import React from 'react';
import {AppTabScreenProps} from '@/common/@types';
import {Routes} from '@/main/navigator';
import {Box, Icon, Screen, Text} from '@/presentation/components';
import {useAuthCredentials} from '@/presentation/providers';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<Routes.MY_PROFILE>) {
  const {authCredentials} = useAuthCredentials();
  const name = authCredentials?.user.fullName;
  return (
    <Screen>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        {name && <Text preset="headingMedium">{name}</Text>}
        <Icon
          name="settings"
          onPress={() => navigation.navigate(Routes.SETTINGS)}
        />
      </Box>
    </Screen>
  );
}

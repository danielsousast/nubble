import React from 'react';
import {AppTabScreenProps} from '@/common/@types';
import {Routes} from '@/main/navigator';
import {Screen, Text} from '@/presentation/components';

export function MyProfileScreen(_props: AppTabScreenProps<Routes.MY_PROFILE>) {
  return (
    <Screen>
      <Text preset="headingLarge">FavoriteScreen</Text>
    </Screen>
  );
}

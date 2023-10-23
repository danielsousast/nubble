import React from 'react';
import {AppTabScreenProps} from '@/common/@types';
import {Routes} from '@/main/navigator';
import {Screen, Text} from '@/presentation/components';

export function FavoriteScreen(_props: AppTabScreenProps<Routes.FAVORITE>) {
  return (
    <Screen>
      <Text preset="headingLarge">FavoriteScreen</Text>
    </Screen>
  );
}

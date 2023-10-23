import React from 'react';
import {AppTabScreenProps} from '@/common/@types';
import {Routes} from '@/main/navigator';
import {Screen, Text} from '@/presentation/components';

export function NewPostScreen(_props: AppTabScreenProps<Routes.NEW_POST>) {
  return (
    <Screen>
      <Text preset="headingLarge">NewPostScreen</Text>
    </Screen>
  );
}

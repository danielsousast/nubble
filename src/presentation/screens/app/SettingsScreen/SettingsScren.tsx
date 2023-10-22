import React from 'react';
import {AppScreenProps} from '@/common/@types';
import {Routes} from '@/main/navigator';
import {Screen, Text} from '@/presentation/components';

export function SettingsScreen(_props: AppScreenProps<Routes.SETTINGS>) {
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Settings</Text>
    </Screen>
  );
}

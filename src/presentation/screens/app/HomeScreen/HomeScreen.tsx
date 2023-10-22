import React from 'react';
import {AppScreenProps} from '@/common/@types';
import {Routes} from '@/main/navigator';
import {Button, Screen, Text} from '@/presentation/components';

export function HomeScreen({navigation}: AppScreenProps<Routes.HOME>) {
  function navigateToSettings() {
    navigation.navigate(Routes.SETTINGS);
  }

  return (
    <Screen>
      <Text preset="headingLarge">HomeScreen</Text>
      <Button onPress={navigateToSettings} title="Go to Settings" mt="s24" />
    </Screen>
  );
}

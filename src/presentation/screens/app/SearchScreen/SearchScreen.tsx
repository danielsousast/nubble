import React from 'react';
import {Icon, Screen, Text, TextInput} from '@/presentation/components';

export function SearchScreen() {
  return (
    <Screen
      canGoBack
      HeaderComponent={<TextInput LeftComponent={<Icon name="search" />} />}>
      <Text>Search</Text>
    </Screen>
  );
}

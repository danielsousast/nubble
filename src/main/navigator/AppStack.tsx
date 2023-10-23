import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabNavigator, AppTabParamList} from './AppTabNavigator';
import {Routes} from '@/main/navigator';
import {SettingsScreen} from '@/presentation/screens';

export type AppStackParamList = {
  [Routes.SETTINGS]: undefined;
  [Routes.APP_TAB]: NavigatorScreenParams<AppTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name={Routes.APP_TAB} component={AppTabNavigator} />
      <Stack.Screen name={Routes.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
}

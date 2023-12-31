import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabNavigator, AppTabParamList} from './AppTabNavigator';
import {Routes} from '@/main/navigator';
import {
  SettingsScreen,
  PostCommentScreen,
  ProfileScreen,
} from '@/presentation/screens';

export type AppStackParamList = {
  [Routes.SETTINGS]: undefined;
  [Routes.POST_COMMENTS]: {
    postId: number;
    postAuthorId: number;
  };
  [Routes.APP_TAB]: NavigatorScreenParams<AppTabParamList>;
  [Routes.PROFILE]: {
    userId: number;
  };
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
      <Stack.Screen name={Routes.POST_COMMENTS} component={PostCommentScreen} />
      <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
}

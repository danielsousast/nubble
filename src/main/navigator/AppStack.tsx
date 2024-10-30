import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppTabNavigator, AppTabParamList} from './AppTabNavigator';
import {Routes} from '@/main/navigator';
import {
  SettingsScreen,
  PostCommentScreen,
  ProfileScreen,
  SearchScreen,
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
  [Routes.SEARCH]: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({initialRouteName = Routes.APP_TAB}: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name={Routes.APP_TAB} component={AppTabNavigator} />
      <Stack.Screen name={Routes.SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={Routes.POST_COMMENTS} component={PostCommentScreen} />
      <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={Routes.SEARCH} component={SearchScreen} />
    </Stack.Navigator>
  );
}

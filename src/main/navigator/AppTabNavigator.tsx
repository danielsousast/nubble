import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {AppTabBar} from './AppTabBar';
import {Routes} from './routes';
import {
  HomeScreen,
  FavoriteScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@/presentation/screens';

const Tab = createBottomTabNavigator<AppTabParamList>();

export type AppTabParamList = {
  [Routes.HOME]: undefined;
  [Routes.FAVORITE]: undefined;
  [Routes.MY_PROFILE]: undefined;
  [Routes.NEW_POST]: undefined;
};

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.NEW_POST} component={NewPostScreen} />
      <Tab.Screen name={Routes.FAVORITE} component={FavoriteScreen} />
      <Tab.Screen name={Routes.MY_PROFILE} component={MyProfileScreen} />
    </Tab.Navigator>
  );
}

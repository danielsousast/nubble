import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen, LoginScreen} from '@/presentation/screens';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from '@/common/consts/routes';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          fullScreenGestureEnabled: true,
        }}>
        <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Routes.SIGN_UP} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

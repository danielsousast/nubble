import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '@/main/navigator';
import {IconProps} from '@/presentation/components';
import {
  SignUpScreen,
  LoginScreen,
  ForgotPasswordScreen,
  SuccessScreen,
} from '@/presentation/screens';

export type AuthStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGN_UP]: undefined;
  [Routes.SUCCESS]: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  [Routes.FORGOT_PASSWORD]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Routes.SIGN_UP} component={SignUpScreen} />
      <Stack.Screen name={Routes.SUCCESS} component={SuccessScreen} />
      <Stack.Screen
        name={Routes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

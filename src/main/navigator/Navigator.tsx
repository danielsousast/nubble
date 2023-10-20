import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen, LoginScreen} from '@/presentation/screens';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from '@/common/consts/routes';
import SuccessScreen from '@/presentation/screens/auth/SuccessScreen/SuccessScreen';
import {IconProps} from '@/presentation/components';
import {ForgotPasswordScreen} from '@/presentation/screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';

export type RootParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.SIGN_UP]: undefined;
  [Routes.SUCCESS]: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  [Routes.FORGOT_PASSWORD]: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

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
        <Stack.Screen name={Routes.SUCCESS} component={SuccessScreen} />
        <Stack.Screen
          name={Routes.FORGOT_PASSWORD}
          component={ForgotPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

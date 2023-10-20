import React from 'react';
import {Routes} from '@/common/consts/routes';
import {
  Button,
  Box,
  Text,
  Screen,
  PasswordInput,
  TextInput,
} from '@/presentation/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '@/main/navigator/Navigator';

type LoginScreenProps = NativeStackScreenProps<RootParamList, Routes.LOGIN>;

export function LoginScreen({navigation}: LoginScreenProps) {
  function navigateToSignUp() {
    navigation.navigate(Routes.SIGN_UP);
  }

  function navigateToForgotPassword() {
    navigation.navigate(Routes.FORGOT_PASSWORD);
  }

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <Box mb="s20">
        <TextInput label="E-mail" placeholder="Digite seu e-mail" />
      </Box>
      <Box>
        <PasswordInput label="Senha" placeholder="Digite sua senha" />
      </Box>
      <Text
        onPress={navigateToForgotPassword}
        color="primary"
        preset="paragraphSmall"
        bold
        mt="s10">
        Esqueci minha senha
      </Text>
      <Button marginTop="s48" title="Entrar" />
      <Button
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
        onPress={navigateToSignUp}
      />
    </Screen>
  );
}

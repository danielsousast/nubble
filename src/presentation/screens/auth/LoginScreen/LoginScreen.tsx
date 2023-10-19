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

export function LoginScreen({navigation}: any) {
  function navigateToSignUp() {
    navigation.navigate(Routes.SIGN_UP);
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
      <Text color="primary" preset="paragraphSmall" bold mt="s10">
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

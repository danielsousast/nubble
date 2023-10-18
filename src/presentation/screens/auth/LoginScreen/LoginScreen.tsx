import {Box} from '@/presentation/components/Box/Box';
import Button from '@/presentation/components/Button/Button';
import {Icon} from '@/presentation/components/Icon/Icon';
import {Screen} from '@/presentation/components/Screen/Screen';
import {Text} from '@/presentation/components/Text/Text';
import {TextInput} from '@/presentation/components/TextInput/TextInput';
import React from 'react';

export function LoginScreen() {
  return (
    <Screen>
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
        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          RightComponent={<Icon color="gray2" size={22} name="eye-on" />}
        />
      </Box>
      <Text color="primary" preset="paragraphSmall" bold mt="s10">
        Esqueci minha senha
      </Text>
      <Button marginTop="s48" title="Entrar" />
      <Button preset="outline" marginTop="s12" title="Criar uma conta" />
    </Screen>
  );
}

import React from 'react';

import {Button} from '@/presentation/components';
import {Screen} from '@/presentation/components/Screen/Screen';
import {Text} from '@/presentation/components/Text/Text';
import {TextInput} from '@/presentation/components/TextInput/TextInput';
import {PasswordInput} from '@/presentation/components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    // TODO: implementar
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button onPress={submitForm} title="Criar uma conta" />
    </Screen>
  );
}

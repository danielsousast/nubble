import React from 'react';
import {
  Button,
  Screen,
  Text,
  TextInput,
  PasswordInput,
} from '@/presentation/components';
import {Routes} from '@/common/consts/routes';
import {RootParamList} from '@/main/navigator/Navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type SignUpScreenProps = NativeStackScreenProps<RootParamList, Routes.SIGN_UP>;

export function SignUpScreen({navigation}: SignUpScreenProps) {
  function submitForm() {
    navigation.navigate(Routes.SUCCESS, {
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora e só fazer login na nossa plataforma.',
      icon: {
        name: 'check-round',
        color: 'success',
      },
    });
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

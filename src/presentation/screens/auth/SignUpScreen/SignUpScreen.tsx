import React from 'react';
import {
  Button,
  Screen,
  Text,
  FormPasswordInput,
  FormTextInput,
} from '@/presentation/components';
import {Routes} from '@/common/consts/routes';
import {RootParamList} from '@/main/navigator/Navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '@/presentation/hooks';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {SignUpSchemaType, signUpSchema} from './signUpSchema';

type SignUpScreenProps = NativeStackScreenProps<RootParamList, Routes.SIGN_UP>;

export function SignUpScreen(_props: SignUpScreenProps) {
  const {control, handleSubmit} = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });
  const {reset} = useResetNavigationSuccess();

  function submitForm(_data: SignUpSchemaType) {
    console.log(_data);
    reset({
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
      <FormTextInput
        label="Seu username"
        name="username"
        control={control}
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        label="Nome Completo"
        autoCapitalize="words"
        name="fullName"
        control={control}
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        label="E-mail"
        name="email"
        control={control}
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        label="Senha"
        name="password"
        control={control}
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button onPress={handleSubmit(submitForm)} title="Criar uma conta" />
    </Screen>
  );
}

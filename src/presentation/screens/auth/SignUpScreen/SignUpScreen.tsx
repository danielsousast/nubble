import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {SignUpSchemaType, signUpSchema} from './signUpSchema';
import {useAsyncValidation} from './useAsyncValidation';
import {AuthScreenProps} from '@/common/@types';
import {useAuthSignUp} from '@/domain/auth';
import {Routes} from '@/main/navigator';
import {
  Button,
  Screen,
  Text,
  FormPasswordInput,
  FormTextInput,
  ActivityIndicator,
} from '@/presentation/components';
import {useResetNavigationSuccess} from '@/presentation/hooks';

export function SignUpScreen(_props: AuthScreenProps<Routes.SIGN_UP>) {
  const {control, handleSubmit, getFieldState} = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });
  const {reset} = useResetNavigationSuccess();
  const {usernameValidation, emailValidation} = useAsyncValidation({
    getFieldState,
    control,
  });
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: onSuccessfulSignUp,
  });

  function submitForm(data: SignUpSchemaType) {
    signUp(data);
  }

  function onSuccessfulSignUp() {
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
        errorMessage={usernameValidation.errorMessage}
        RightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormTextInput
        label="Nome"
        autoCapitalize="words"
        name="firstName"
        control={control}
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        label="Sobrenome"
        autoCapitalize="words"
        name="lastName"
        control={control}
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        label="E-mail"
        name="email"
        control={control}
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
        errorMessage={emailValidation.errorMessage}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />
      <FormPasswordInput
        label="Senha"
        name="password"
        control={control}
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button
        isLoading={isLoading}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}

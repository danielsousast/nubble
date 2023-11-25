import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {LoginSchemaType, loginSchema} from './loginSchema';
import {AuthScreenProps} from '@/common/@types';
import {useAuthSignIn} from '@/domain/auth';
import {Routes} from '@/main/navigator';
import {
  Button,
  Text,
  Screen,
  FormPasswordInput,
  FormTextInput,
} from '@/presentation/components';
import {useToastAction} from '@/presentation/hooks';

export function LoginScreen({navigation}: AuthScreenProps<Routes.LOGIN>) {
  const {showToast} = useToastAction();
  const {signIn, isLoading} = useAuthSignIn({
    onError: message => {
      showToast({
        message,
        type: 'error',
      });
    },
  });
  const {control, handleSubmit} = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  function navigateToSignUp() {
    navigation.navigate(Routes.SIGN_UP);
  }

  function navigateToForgotPassword() {
    navigation.navigate(Routes.FORGOT_PASSWORD);
  }

  function submitForm(data: LoginSchemaType) {
    signIn(data);
  }

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        name="email"
        label="E-mail"
        control={control}
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />
      <Text
        onPress={navigateToForgotPassword}
        color="primary"
        preset="paragraphSmall"
        bold
        mt="s10">
        Esqueci minha senha
      </Text>
      <Button
        marginTop="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
        isLoading={isLoading}
        onPress={navigateToSignUp}
      />
    </Screen>
  );
}

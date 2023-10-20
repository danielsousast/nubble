import React from 'react';
import {Routes} from '@/common/consts/routes';
import {RootParamList} from '@/main/navigator/Navigator';
import {Button, Screen, Text, TextInput} from '@/presentation/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '@/presentation/hooks';

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootParamList,
  Routes.FORGOT_PASSWORD
>;

export function ForgotPasswordScreen(_props: ForgotPasswordScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'message-round',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32" semiBold>
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}

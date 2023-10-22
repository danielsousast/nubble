import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {
  ForgotPasswordSchemaType,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
import {Routes} from '@/common/consts/routes';
import {RootParamList} from '@/main/navigator/Navigator';
import {Button, FormTextInput, Screen, Text} from '@/presentation/components';
import {useResetNavigationSuccess} from '@/presentation/hooks';

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootParamList,
  Routes.FORGOT_PASSWORD
>;

export function ForgotPasswordScreen(_props: ForgotPasswordScreenProps) {
  const {control, handleSubmit} = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const {reset} = useResetNavigationSuccess();

  function submitForm(_data: ForgotPasswordSchemaType) {
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
      <FormTextInput
        label="E-mail"
        name="email"
        control={control}
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={handleSubmit(submitForm)} title="Recuperar senha" />
    </Screen>
  );
}

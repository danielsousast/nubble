import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {
  ForgotPasswordSchemaType,
  forgotPasswordSchema,
} from './forgotPasswordSchema';
import {AuthScreenProps} from '@/common/@types';
import {useAuthRequestNewPassword} from '@/domain/auth';
import {Routes} from '@/main/navigator';
import {Button, FormTextInput, Screen, Text} from '@/presentation/components';
import {useResetNavigationSuccess} from '@/presentation/hooks';
import {useToastAction} from '@/presentation/providers';

export function ForgotPasswordScreen(
  _props: AuthScreenProps<Routes.FORGOT_PASSWORD>,
) {
  const {control, handleSubmit} = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });
  const {reset} = useResetNavigationSuccess();
  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: onSuccessRequestNewPassword,
    onError: message => {
      showToast({
        message,
        type: 'error',
      });
    },
  });
  const {showToast} = useToastAction();

  function submitForm({email}: ForgotPasswordSchemaType) {
    requestNewPassword(email);
  }

  function onSuccessRequestNewPassword() {
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
      <Button
        isLoading={isLoading}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}

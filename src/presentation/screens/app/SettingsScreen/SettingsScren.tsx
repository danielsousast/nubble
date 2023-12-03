import React from 'react';
import {AppScreenProps} from '@/common/@types';
import {useAuthSignOut} from '@/domain/auth';
import {Routes} from '@/main/navigator';
import {Button, Screen} from '@/presentation/components';

export function SettingsScreen({}: AppScreenProps<Routes.SETTINGS>) {
  const {isLoading, signOut} = useAuthSignOut();

  return (
    <Screen canGoBack title="Configurações">
      <Button isLoading={isLoading} title="Sair da conta" onPress={signOut} />
    </Screen>
  );
}

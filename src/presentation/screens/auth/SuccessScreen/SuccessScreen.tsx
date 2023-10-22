import React from 'react';
import {AuthScreenProps} from '@/common/@types';
import {Routes} from '@/main/navigator';
import {Button, Icon, Screen, Text} from '@/presentation/components';

export const SuccessScreen = ({
  route,
  navigation,
}: AuthScreenProps<Routes.SUCCESS>) => {
  const {title, description, icon} = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...icon} />
      <Text preset="headingLarge" mt="s24">
        {title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {description}
      </Text>
      <Button title="Voltar ao inicio" onPress={handleGoBack} mt="s40" />
    </Screen>
  );
};

export default SuccessScreen;

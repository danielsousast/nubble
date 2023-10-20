import {Routes} from '@/common/consts/routes';
import {RootParamList} from '@/main/navigator/Navigator';
import {Button, Icon, Screen, Text} from '@/presentation/components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';

type SuccessScreenProps = NativeStackScreenProps<RootParamList, Routes.SUCCESS>;

export const SuccessScreen = ({route, navigation}: SuccessScreenProps) => {
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

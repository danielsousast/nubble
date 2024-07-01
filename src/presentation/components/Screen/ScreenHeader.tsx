import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Box, Icon, Text, TouchableBox} from '@/presentation/components';

interface Props {
  title?: string;
  canGoBack?: boolean;
  HeaderComponent?: React.ReactNode;
}

export function ScreenHeader({canGoBack, title, HeaderComponent}: Props) {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      mb="s24"
      alignItems="center"
      justifyContent="center">
      {canGoBack && (
        <TouchableBox
          flexDirection="row"
          alignItems="center"
          style={{
            position: 'absolute',
            left: 0,
          }}
          onPress={navigation.goBack}>
          <Icon size={20} name="arrow-left" color="primary" />
          {!title && !HeaderComponent && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
          {HeaderComponent && HeaderComponent}
        </TouchableBox>
      )}
      {title && !HeaderComponent && <Text preset="headingSmall">{title}</Text>}
    </Box>
  );
}

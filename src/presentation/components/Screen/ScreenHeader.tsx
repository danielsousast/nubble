import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Box, Icon, Text, TouchableBox} from '@/presentation/components';

interface Props {
  title?: string;
  canGoBack?: boolean;
}

export function ScreenHeader({canGoBack, title}: Props) {
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
          {!title && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
    </Box>
  );
}

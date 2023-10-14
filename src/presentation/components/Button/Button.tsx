import React from 'react';
import {Text} from '../Text/Text';
import {TouchableBox, TouchableBoxProps} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

export interface ButtonProps extends TouchableBoxProps {
  title: string;
  loading?: boolean;
}

const Button = ({title, loading, ...touchableBoxProps}: ButtonProps) => {
  return (
    <TouchableBox
      backgroundColor="buttonPrimary"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      paddingHorizontal="s20"
      activeOpacity={0.6}
      {...touchableBoxProps}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text color="primaryContrast">{title}</Text>
      )}
    </TouchableBox>
  );
};

export default Button;

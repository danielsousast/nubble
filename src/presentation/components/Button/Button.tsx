import React from 'react';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';
import {TouchableBox} from '../Box/Box';
import {Text} from '../Text/Text';
import {buttonPresets} from './ButtonPresets';
import {ButtonProps} from './Buttontypes';

export const Button = ({
  title,
  isLoading,
  preset = 'primary',
  disabled,
  ...touchableBoxProps
}: ButtonProps) => {
  const buttonPreset = disabled
    ? buttonPresets[preset].disabled
    : buttonPresets[preset].default;
  return (
    <TouchableBox
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      paddingHorizontal="s20"
      activeOpacity={0.6}
      disabled={disabled || isLoading}
      {...buttonPreset.container}
      {...touchableBoxProps}>
      {isLoading ? (
        <ActivityIndicator {...buttonPreset.content} testID="loading" />
      ) : (
        <Text bold {...buttonPreset.content} preset="paragraphMedium">
          {title}
        </Text>
      )}
    </TouchableBox>
  );
};

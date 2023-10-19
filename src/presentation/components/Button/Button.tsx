import React from 'react';
import {Text} from '../Text/Text';
import {TouchableBox} from '../Box/Box';
import {ButtonProps} from './Button.types';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';
import {buttonPresets} from './ButtonPresets';

export const Button = ({
  title,
  loading,
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
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...touchableBoxProps}>
      {loading ? (
        <ActivityIndicator {...buttonPreset.content} />
      ) : (
        <Text bold {...buttonPreset.content} preset="paragraphMedium">
          {title}
        </Text>
      )}
    </TouchableBox>
  );
};

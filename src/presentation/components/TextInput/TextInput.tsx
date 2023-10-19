import React from 'react';
import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppTheme';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export const TextInput = ({
  label,
  errorMessage,
  RightComponent,
  boxProps,
  ...rnTextInputProps
}: TextInputProps) => {
  const {colors} = useAppTheme();
  const inputRef = React.useRef<RNTextInput>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  const $containerStyle: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    padding: 's16',
    borderRadius: 's12',
    flexDirection: 'row',
  };

  return (
    <Pressable onPress={handleFocus}>
      <Box {...boxProps}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$containerStyle}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            {...rnTextInputProps}
            style={$inputStyle.input}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text color="redError" bold preset="paragraphSmall" mt="s4">
            Error
          </Text>
        )}
      </Box>
    </Pressable>
  );
};

const $inputStyle = StyleSheet.create({
  input: {
    padding: 0,
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: $fontFamily.regular,
    ...$fontSizes.paragraphMedium,
  },
});

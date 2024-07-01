import React from 'react';
import {
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  Pressable,
  TextStyle,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export const TextInput = ({
  label,
  errorMessage,
  RightComponent,
  LeftComponent,
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
      <Box {...boxProps} flexGrow={1} flexShrink={1}>
        {!!label && (
          <Text preset="paragraphMedium" mb="s4" testID="input-label">
            {label}
          </Text>
        )}
        <Box {...$containerStyle}>
          {LeftComponent && (
            <Box justifyContent="center" mr="s16">
              {LeftComponent}
            </Box>
          )}
          <RNTextInput
            ref={inputRef}
            autoCapitalize="none"
            placeholderTextColor={colors.gray2}
            {...rnTextInputProps}
            style={$textInputStyle}
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

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

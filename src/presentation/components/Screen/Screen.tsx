import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Icon,
  Text,
  TouchableBox,
  Box,
  BoxProps,
} from '@/presentation/components';
import {useAppSafeArea, useAppTheme} from '@/presentation/hooks';

interface CoontainerProps {
  children: React.ReactNode;
  backgroundColor: string;
}
export function ScrollViewContainer({
  children,
  backgroundColor,
}: CoontainerProps) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: CoontainerProps) {
  return <View style={{flex: 1, backgroundColor}}>{children}</View>;
}

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
  style,
  ...boxProps
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();
  const {goBack} = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: colors.background}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {canGoBack && (
            <TouchableBox mb="s24" flexDirection="row" onPress={goBack}>
              <Icon name="arrow-left" color="primary" size={22} />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

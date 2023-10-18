import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '@/presentation/hooks/useSafeArea';
import {Text} from '../Text/Text';
import {Icon} from '../Icon/Icon';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useAppTheme} from '@/presentation/hooks/useAppTheme';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}
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
  return <View style={{backgroundColor}}>{children}</View>;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {bottom, top} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {canGoBack && (
            <Box mb="s24" flexDirection="row">
              <Icon name="arrow-left" color="primary" size={22} />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

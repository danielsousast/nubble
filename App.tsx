import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@/common/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SignUpScreen} from '@/presentation/screens/auth/SignUpScreen/SignUpScreen';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from '@/common/theme/theme';
import {Navigator} from '@/main/navigator/Navigator';
import {Toast} from '@/presentation/components';
import {ToastProvider} from '@/presentation/hooks/toast/useToastContext';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <Navigator />
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from '@/common/theme/theme';
import {Navigator} from '@/main/navigator/Navigator';
import {Toast} from '@/presentation/components';
import {ToastProvider} from '@/presentation/providers';
import {AuthCredentialsProvider} from '@/presentation/providers/auth/AuthProvider';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <Navigator />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
};

export default App;

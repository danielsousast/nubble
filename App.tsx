import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@/common/theme/theme';
import LoginScreen from '@/presentation/screens/auth/LoginScreen/LoginScreen';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginScreen />
    </ThemeProvider>
  );
};

export default App;

import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/presentation/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@/common/theme/theme';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge">teste</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

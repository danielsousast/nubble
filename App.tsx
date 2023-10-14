import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/presentation/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@/common/theme/theme';
import Button from '@/presentation/components/Button/Button';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text preset="headingLarge" color="redError">
          teste
        </Text>

        <Button title="Entrar" mt="s20" />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/presentation/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@/common/theme/theme';
import Button from '@/presentation/components/Button/Button';
import {Box} from '@/presentation/components/Box/Box';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box padding="s20">
          <Text preset="headingLarge" color="primary">
            Nubble
          </Text>
          <Button title="Primary" mt="s20" preset="primary" />
          <Button title="Primary" mt="s20" preset="primary" loading />
          <Button title="Outline" mt="s20" preset="outline" />
          <Button title="Outline" mt="s20" preset="outline" loading />

          <Button title="Primary" mt="s20" preset="primary" disabled />
          <Button title="Outline" mt="s20" preset="outline" disabled />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

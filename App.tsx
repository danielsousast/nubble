import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/presentation/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@/common/theme/theme';
import Button from '@/presentation/components/Button/Button';
import {Box} from '@/presentation/components/Box/Box';
import {TextInput} from '@/presentation/components/TextInput/TextInput';
import {Icon} from '@/presentation/components/Icon/Icon';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box padding="s20">
          <Text marginBottom="s8" preset="headingLarge">
            Olá!
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>
          <Box mb="s20">
            <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          </Box>
          <Box>
            <TextInput
              label="Senha"
              placeholder="Digite sua senha"
              RightComponent={<Icon color="gray2" size={22} name="eye-on" />}
            />
          </Box>

          <Text color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
          <Button preset="outline" marginTop="s12" title="Criar uma conta" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;

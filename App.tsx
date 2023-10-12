import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {Text} from './src/presentation/components/Text/Text';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <Text preset="headingLarge">teste</Text>
    </SafeAreaView>
  );
};

export default App;

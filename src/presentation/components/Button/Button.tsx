import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';

// import { Container } from './styles';

interface ButtonProps {
  title: string;
}

const Button = ({title}: ButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

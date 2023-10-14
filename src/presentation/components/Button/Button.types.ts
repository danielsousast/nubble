import {ThemeColors} from '@/common/theme/theme';
import {TouchableBoxProps} from '../Box/Box';

export type ButtonPresets = 'primary' | 'outline';

export interface ButtonUI {
  container: TouchableBoxProps;
  content: {
    color: ThemeColors;
  };
}

export interface ButtonProps extends TouchableBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresets;
}

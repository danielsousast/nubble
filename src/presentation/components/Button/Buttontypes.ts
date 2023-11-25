import {TouchableBoxProps} from '../Box/Box';
import {ThemeColors} from '@/common/theme/theme';

export type ButtonPresets = 'primary' | 'outline';

export interface ButtonUI {
  container: TouchableBoxProps;
  content: {
    color: ThemeColors;
  };
}

export interface ButtonProps extends TouchableBoxProps {
  title: string;
  isLoading?: boolean;
  preset?: ButtonPresets;
}

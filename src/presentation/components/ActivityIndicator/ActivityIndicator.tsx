import React from 'react';
import {ThemeColors} from '@/common/theme/theme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color?: ThemeColors;
  size?: number | 'small' | 'large';
}

const ActivityIndicator = ({color = 'primary', ...rest}: Props) => {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} {...rest} />;
};

export default ActivityIndicator;

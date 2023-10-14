import React from 'react';
import {Theme, ThemeColors} from '@/common/theme/theme';
import {useTheme} from '@shopify/restyle';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color?: ThemeColors;
  size?: number | 'small' | 'large';
}

const ActivityIndicator = ({color = 'primary', ...rest}: Props) => {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator color={colors[color]} {...rest} />;
};

export default ActivityIndicator;

import {Theme} from '@/common/theme/theme';
import {
  createBox,
  createRestyleComponent,
  spacing,
  backgroundColor,
  layout,
  border,
  BackgroundColorProps,
  SpacingProps,
  LayoutProps,
  BorderProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export type TouchableBoxProps = BackgroundColorProps<Theme> &
  TouchableOpacityProps &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export const TouchableBox = createRestyleComponent<TouchableBoxProps, Theme>(
  [spacing, backgroundColor, layout, border, spacingShorthand],
  TouchableOpacity,
);

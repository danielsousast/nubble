import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
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
import {Theme} from '@/common/theme/theme';

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

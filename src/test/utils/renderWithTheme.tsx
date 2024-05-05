import {ReactNode} from 'react';
import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {
  RenderOptions,
  RenderResult,
  render,
} from '@testing-library/react-native';
import {theme} from '@/common/theme/theme';

export function renderWithTheme(
  children: ReactNode,
  options?: RenderOptions,
): RenderResult {
  return render(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    options,
  );
}

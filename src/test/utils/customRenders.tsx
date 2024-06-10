import { ReactNode } from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import {
  RenderHookOptions,
  RenderOptions,
  RenderResult,
  render,
  renderHook,
} from '@testing-library/react-native';
import { theme } from '@/common/theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export function reactQueryWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      }
    }
  });
  
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}


export function renderWithTheme(
  children: ReactNode,
  options?: RenderOptions,
): RenderResult {
  return render(
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>,
    options,
  );
}

export function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
  return renderHook(renderCallback, {
    wrapper: reactQueryWrapper(),
    ...options,
  });
}


import { ReactNode } from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import {
  RenderOptions,
  RenderResult,
  render,
} from '@testing-library/react-native';
import { theme } from '@/common/theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

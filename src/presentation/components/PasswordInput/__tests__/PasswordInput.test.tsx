import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {PasswordInput} from '../PasswordInput';
import {renderWithTheme} from '@/test/utils';

describe('PasswordInput', () => {
  test('should render the input with the default props', () => {
    const {queryByPlaceholderText} = renderWithTheme(
      <PasswordInput label={'label'} placeholder="placeholder" />,
    );
    const element = queryByPlaceholderText(/placeholder/);
    expect(element).toBeTruthy();
    expect(element?.props.secureTextEntry).toBe(true);
  });

  test('should toggle secureTextEntry', () => {
    const {queryByPlaceholderText, getByTestId} = renderWithTheme(
      <PasswordInput label={'label'} placeholder="placeholder" />,
    );
    const element = queryByPlaceholderText(/placeholder/);
    expect(element?.props.secureTextEntry).toBe(true);

    const icon = getByTestId('input-icon');
    fireEvent.press(icon);
    expect(element?.props.secureTextEntry).toBe(false);

    fireEvent.press(icon);
    expect(element?.props.secureTextEntry).toBe(true);
  });
});

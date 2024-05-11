import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {Button} from '../Button';
import {renderWithTheme} from '@/test/utils';

describe('<Button />', () => {
  it('should call the onPress function', () => {
    const mockedOnPress = jest.fn();
    const {getByText} = renderWithTheme(
      <Button title="button" onPress={mockedOnPress} />,
    );
    fireEvent.press(getByText('button'));
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('should render button loading', () => {
    const {getByTestId} = renderWithTheme(<Button title="button" isLoading />);
    expect(getByTestId('loading')).toBeTruthy();
  });
});

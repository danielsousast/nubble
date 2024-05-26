import React from 'react';
import {StyleSheet} from 'react-native';
import {fireEvent} from '@testing-library/react-native';
import {Button} from '../Button';
import {ButtonProps} from '../Buttontypes';
import {renderWithTheme} from '@/test/utils';

function renderSut(props: Omit<ButtonProps, 'title'>) {
  return renderWithTheme(<Button title="button" {...props} />);
}

describe('<Button />', () => {
  it('should call the onPress function', () => {
    const mockedOnPress = jest.fn();
    const {getByText} = renderSut({onPress: mockedOnPress});
    fireEvent.press(getByText('button'));
    expect(mockedOnPress).toHaveBeenCalled();
  });

  it('should not call onPress when disable', () => {
    const mockedOnPress = jest.fn();
    const {getByText} = renderSut({onPress: mockedOnPress, disabled: true});
    fireEvent.press(getByText('button'));
    expect(mockedOnPress).not.toHaveBeenCalled();
  });

  it('should render button loading', () => {
    const {getByTestId, queryByText} = renderSut({isLoading: true});
    expect(queryByText('button')).toBeFalsy();
    expect(
      getByTestId('button').props.accessibilityState.disabled,
    ).toBeTruthy();
    expect(getByTestId('loading')).toBeTruthy();
  });

  it('should the title be gray when disabled', () => {
    const {getByText} = renderSut({disabled: true});
    const buttonStyles = StyleSheet.flatten(getByText('button').props.style);
    expect(buttonStyles.color).toEqual('#8E8E8E');
  });
});

import React from 'react';
import {Button} from '../Button';
import {renderWithTheme} from '@/test/utils';

describe('<Button />', () => {
  it('should render the button', () => {
    renderWithTheme(<Button title="Test" />);
  });
});

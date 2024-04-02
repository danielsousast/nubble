import {capitalizeFirstLetter} from '../stringUtils';

describe('capitalizeFirstLetter', () => {
  it('should capitalize first letter', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('hello world')).toBe('Hello World');
    expect(capitalizeFirstLetter('HeLLo')).toBe('Hello');
  });

  it('should return empty string if input is empty', () => {
    expect(capitalizeFirstLetter(' A')).toBe('A');
    expect(capitalizeFirstLetter('A ')).toBe('A');
  });
});

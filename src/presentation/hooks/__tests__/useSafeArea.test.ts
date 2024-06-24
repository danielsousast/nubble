import {renderHook} from '@testing-library/react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppSafeArea} from '../useSafeArea';
import {AppThemeProvider} from '@/test/utils';

jest.mock('react-native-safe-area-context');
const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useSafeArea', () => {
  test('should return minimum safe area when safearea is less than minimum required', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 20, bottom: 20} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AppThemeProvider,
    });
    expect(result.current.top).toBe(20);
    expect(result.current.bottom).toBe(20);
  });

  test('should return safe area when safearea is more than minimum required', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 50, bottom: 50} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AppThemeProvider,
    });
    expect(result.current.top).toBe(50);
    expect(result.current.bottom).toBe(50);
  });
});

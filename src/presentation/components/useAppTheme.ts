import {Theme} from '@/common/theme/theme';
import {useTheme} from '@shopify/restyle';

export function useAppTheme() {
  return useTheme<Theme>();
}

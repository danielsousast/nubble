import {useTheme} from '@shopify/restyle';
import {Theme} from '@/common/theme/theme';

export function useAppTheme() {
  return useTheme<Theme>();
}

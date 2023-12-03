import React from 'react';
import {Dimensions} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {Icon, IconProps} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {$shadowProps} from '@/common/theme/theme';
import {ToastMode, ToastType} from '@/presentation/providers/toast/toastTypes';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

export function ToastContent({toast}: {toast: ToastType}) {
  const position: ToastType['position'] = toast?.position || 'top';
  const type = toast?.type || 'success';

  return (
    <Box
      {...$boxStyle}
      style={[
        {
          [position]: 100,
        },
        $shadowProps,
      ]}>
      <Icon {...mapTypeToIcon[type!]} />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast?.message}
      </Text>
    </Box>
  );
}
const mapTypeToIcon: Record<ToastMode, IconProps> = {
  success: {
    color: 'success',
    name: 'check-round',
  },
  error: {
    color: 'error',
    name: 'error-round',
  },
};

const $boxStyle: BoxProps = {
  borderWidth: 1,
  borderColor: 'gray5',
  backgroundColor: 'background',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.97,
  maxWidth: MAX_WIDTH,
};

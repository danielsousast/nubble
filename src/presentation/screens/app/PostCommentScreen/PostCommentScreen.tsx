import React from 'react';
import {AppScreenProps} from '@/common/@types';
import {Routes} from '@/main/navigator';
import {Box, Screen, Text} from '@/presentation/components';

export function PostCommentScreen({}: AppScreenProps<Routes.POST_COMMENTS>) {
  // route.params.
  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}

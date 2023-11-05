import React from 'react';
import {Pressable} from 'react-native';
import {Text} from '@/presentation/components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}
export function SeeMorePostsButton({fetchNextPage, hasNextPage}: Props) {
  if (hasNextPage) {
    return (
      <Pressable onPress={fetchNextPage}>
        <Text bold color="primary" textAlign="center">
          Ver mais
        </Text>
      </Pressable>
    );
  }

  return null;
}

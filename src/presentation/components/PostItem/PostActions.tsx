import React from 'react';
import {Post} from '@/domain/post';
import {
  Box,
  TouchableBox,
  Icon,
  IconProps,
  Text,
} from '@/presentation/components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;
export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: Implement like post
  }

  function navigateToComments() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    // TODO: Implement favorite post
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        text={reactionCount}
        icon={{
          default: 'heart',
          marked: 'heart-fill',
        }}
      />
      <Item
        onPress={navigateToComments}
        text={commentCount}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <Item
        onPress={favoritePost}
        text={favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmark-fill',
        }}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, icon, marked = false, text}: ItemProps) {
  return (
    <TouchableBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableBox>
  );
}

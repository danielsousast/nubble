import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {User} from '@/domain/user';
import {Box, Icon, Text} from '@/presentation/components';
import {UserItem} from '@/presentation/components/UserItem/UserItem';
import {
  useSearchHistoryList,
  useSearchHistoryService,
} from '@/services/searchHistory';

export default function SearchHistory() {
  const list = useSearchHistoryList();
  const {removeUser} = useSearchHistoryService();

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <UserItem
        name={item.fullName}
        profileURL={item.profileUrl}
        userId={item.id}
        avatarProps={{size: 48}}
        RightComponent={
          <Icon name="trash" onPress={() => removeUser(item.id)} />
        }
      />
    );
  }

  return (
    <Box>
      <FlatList
        data={list}
        keyExtractor={item => item.username}
        renderItem={renderItem}
        ListHeaderComponent={
          <Text preset="headingMedium" mb="s16">
            Buscas Recentes
          </Text>
        }
      />
    </Box>
  );
}

import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import SearchHistory from './SearchHistory';
import {User} from '@/domain/user';
import {useSearchUser} from '@/domain/user/usecases/useSearchUser';
import {Icon, Screen, TextInput} from '@/presentation/components';
import {UserItem} from '@/presentation/components/UserItem/UserItem';
import {useDebounce} from '@/presentation/hooks/useDebounce';
import {useSearchHistoryService} from '@/services/searchHistory';

export function SearchScreen() {
  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search, 500);
  const {list} = useSearchUser(debouncedSearch);
  const {addUser} = useSearchHistoryService();

  function onUserPress(user: User) {
    addUser(user);
  }

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <UserItem
        name={item.fullName}
        profileURL={item.profileUrl}
        userId={item.id}
        onPress={() => onUserPress(item)}
        avatarProps={{size: 48}}
      />
    );
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          onChangeText={setSearch}
          value={search}
          LeftComponent={<Icon name="search" />}
          placeholder="Pesquise por um usuário"
        />
      }>
      {search?.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          keyExtractor={item => item.username}
          renderItem={renderItem}
        />
      )}
    </Screen>
  );
}

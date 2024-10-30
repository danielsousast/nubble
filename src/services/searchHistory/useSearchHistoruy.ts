import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {SearchHistoryService} from './searchHistoryTypes';
import {User} from '@/domain/user';
import {storageService} from '@/infra';

const useSearchHistoryState = create<SearchHistoryService>()(
  persist(
    (set, get) => ({
      userList: [] as User[],
      addUser: (user: User) => {
        const userList = get().userList;
        const hasUser = userList.find(item => item.id === user.id);
        if (!hasUser) {
          set({userList: [...userList, user]});
        }
      },
      removeUser: (userId: User['id']) => {
        const userList = get().userList;
        set({userList: userList.filter(user => user.id !== userId)});
      },
      clearUserList: () => {
        set({userList: []});
      },
    }),
    {
      name: 'search-history',
      storage: storageService,
    },
  ),
);

export function useSearchHistoryList(): SearchHistoryService['userList'] {
  return useSearchHistoryState(state => state.userList);
}

export function useSearchHistoryService(): Omit<
  SearchHistoryService,
  'userList'
> {
  const addUser = useSearchHistoryState(state => state.addUser);
  const removeUser = useSearchHistoryState(state => state.removeUser);
  const clearUserList = useSearchHistoryState(state => state.clearUserList);

  return {
    addUser,
    removeUser,
    clearUserList,
  };
}

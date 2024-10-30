import {User} from '@/domain/user';

export type SearchHistoryService = {
  userList: User[];
  addUser: (user: User) => void;
  removeUser: (userId: User['id']) => void;
  clearUserList: () => void;
};

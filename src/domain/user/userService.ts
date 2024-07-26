import {paginationAdapter} from '../shared/paginationAdapter';
import {Response} from '../shared/paginationTypes';
import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

async function searchUsers(search: string): Promise<Response<User>> {
  const usersAPI = await userApi.searchUsers(search);
  return paginationAdapter.toPageModel(usersAPI, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUsers,
};

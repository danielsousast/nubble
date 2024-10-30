import {ResponseAPI} from '../shared/paginationTypes';
import {UserAPI} from './userTypes';
import {httpClient} from '@/infra/http/httpClient';

export const USER_PATH_URL = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const response = await httpClient.get<UserAPI>(`${USER_PATH_URL}/${userId}`);
  return response.data;
}

async function searchUsers(search: string) {
  const response = await httpClient.get<ResponseAPI<UserAPI>>(
    `${USER_PATH_URL}`,
    {
      params: {search},
    },
  );
  return response.data;
}

export const userApi = {
  getById,
  searchUsers,
};

import {ResponseAPI} from '../shared/paginationTypes';
import {UserAPI} from './userTypes';
import {httpClient} from '@/infra/http/httpClient';

const PATH = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const response = await httpClient.get<UserAPI>(`${PATH}/${userId}`);
  return response.data;
}

async function searchUsers(search: string) {
  const response = await httpClient.get<ResponseAPI<UserAPI>>(`${PATH}`, {
    params: {search},
  });
  return response.data;
}

export const userApi = {
  getById,
  searchUsers,
};

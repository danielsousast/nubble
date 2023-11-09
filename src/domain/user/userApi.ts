import {UserAPI} from './userTypes';
import {httpClient} from '@/infra/httpClient';

const PATH = 'users';

async function getById(userId: string): Promise<UserAPI> {
  const response = await httpClient.get<UserAPI>(`${PATH}/${userId}`);
  return response.data;
}

export const userApi = {
  getById,
};

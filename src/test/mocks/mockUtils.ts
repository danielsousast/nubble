import {AuthCredentials} from '@/domain/auth/authTypes';
import {userAdapter, UserAPI} from '@/domain/user';

const jhonUserAPI: UserAPI = {
  id: 4,
  first_name: 'Jhon',
  last_name: 'Doe',
  username: 'jhondoe',
  email: 'jhondoe@coffstack.com',
  profile_url: 'example.com',
  is_online: true,
  full_name: 'Jhon Doe',
};

const jhonAuthCredentials: AuthCredentials = {
  token: 'jhondoe',
  user: userAdapter.toUser(jhonUserAPI),
  tokenExpiresAt: '123abc',
  refreshToken: '123abc',
};

export const mockUtils = {
  jhonUserAPI,
  jhonAuthCredentials,
};

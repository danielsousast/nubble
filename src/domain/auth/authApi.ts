import {AuthCredentialsAPI} from './authTypes';
import {httpClient} from '@/infra/httpClient';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await httpClient.post<AuthCredentialsAPI>('login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await httpClient.get<string>('profile/logout');
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
};

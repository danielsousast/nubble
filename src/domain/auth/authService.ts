import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials} from './authTypes';
import {httpClient} from '@/infra/httpClient';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('email ou senha inválido');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

function updateToken(token: string) {
  httpClient.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  httpClient.defaults.headers.common.Authorization = null;
}

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
};

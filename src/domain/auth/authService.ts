import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpData} from './authTypes';
import {httpClient} from '@/infra/http/httpClient';

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

async function signUp(signUpData: SignUpData): Promise<void> {
  await authApi.signUp(signUpData);
}

async function isUserNameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUserNameAvailable({username});
  return isAvailable;
}
async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

async function requestNewPassword(email: string): Promise<string> {
  const {message} = await authApi.forgotPassword({email});
  return message;
}

async function authByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const authCredentialsAPI = await authApi.refreshToken(refreshToken);
  return authAdapter.toAuthCredentials(authCredentialsAPI);
}

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
  signUp,
  isUserNameAvailable,
  isEmailAvailable,
  requestNewPassword,
  authByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};

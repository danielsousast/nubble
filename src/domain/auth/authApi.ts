import {AxiosRequestConfig} from 'axios';
import {UserAPI} from '../user';
import {
  AuthCredentialsAPI,
  FieldIsAvailableAPI,
  ForgotPasswordParam,
  SignUpDataAPI,
} from './authTypes';
import {httpClient} from '@/infra/http/httpClient';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsAPI> {
  const response = await httpClient.post<AuthCredentialsAPI>('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await httpClient.get<string>('auth/profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await httpClient.post<UserAPI>('auth/register', data);
  return response.data;
}

async function isUserNameAvailable(params: {
  username: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await httpClient.get<FieldIsAvailableAPI>(
    'auth/validate-username',
    {
      params,
    },
  );

  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await httpClient.get<FieldIsAvailableAPI>(
    'auth/validate-email',
    {
      params,
    },
  );

  return response.data;
}

async function forgotPassword(
  params: ForgotPasswordParam,
): Promise<{message: string}> {
  const response = await httpClient.post<{message: string}>(
    'auth/forgot-password',
    params,
  );

  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsAPI> {
  const response = await httpClient.post<AuthCredentialsAPI>(
    REFRESH_TOKEN_URL,
    {
      refreshToken: token,
    },
  );

  return response.data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  return request.url === REFRESH_TOKEN_URL;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  isEmailAvailable,
  isUserNameAvailable,
  forgotPassword,
  refreshToken,
  isRefreshTokenRequest,
};

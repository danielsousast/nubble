import axios from 'axios';
import {authService} from '@/domain/auth/authService';
import {AuthCredentials} from '@/domain/auth/authTypes';

export const BASE_URL = 'http://127.0.0.1:3333/';

export const httpClient = axios.create({
  baseURL: BASE_URL,
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const interceptor = httpClient.interceptors.response.use(
    response => response,
    async responseError => {
      const failedRequest = responseError.config;
      const rejectAndLogout = shouldRejectAndLogout(
        authCredentials,
        failedRequest,
      );
      if (responseError.response.status !== 401) {
        return Promise.reject(responseError);
      }
      if (rejectAndLogout) {
        removeCredentials();
        return Promise.reject(responseError);
      }

      failedRequest.sent = true;
      const newAuthCredentials = await authService.authByRefreshToken(
        authCredentials?.refreshToken as string,
      );
      saveCredentials(newAuthCredentials);
      failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
      return httpClient(failedRequest);
    },
  );

  // remove listener when component unmount
  return () => httpClient.interceptors.response.eject(interceptor);
}

function shouldRejectAndLogout(
  authCredentials: AuthCredentials | null,
  failedRequest: any,
) {
  const hasNotRefreshToken = !authCredentials?.refreshToken;
  const isRefreshTokenRequest =
    authService.isRefreshTokenRequest(failedRequest);

  return hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent;
}

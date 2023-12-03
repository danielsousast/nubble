import {useContext} from 'react';
import {AuthCredentialsContext} from './AuthProvider';
import {AuthCredentialsService} from '@/domain/auth/authTypes';

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'AuthCredentials should be used within a AuthCredentialsProvider',
    );
  }

  return context;
}

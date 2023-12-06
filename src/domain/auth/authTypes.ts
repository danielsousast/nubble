import {User, UserAPI} from '../user';

export interface AuthCredentials {
  token: string;
  user: User;
  tokenExpiresAt: string;
  refreshToken: string;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; //'bearer';
    token: string; // 'NA.GCfDf81QRs0q4VxyFSEvWs8kZ-DoZnl5zKLn8UDY8ntedjZCPgxVxfFijlQy';
    refreshToken: string;
    expires_at: string; // '2023-10-01T09:12:59.043+00:00';
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ForgotPasswordParam {
  email: string;
}

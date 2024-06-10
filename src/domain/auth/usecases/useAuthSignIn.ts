import {useMutation} from '@tanstack/react-query';
import {authService} from '../authService';
import {AuthCredentials} from '../authTypes';
import {MutationOptions} from '@/domain/shared/useMutation';
import {useAuthCredentials} from '@/presentation/providers';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const {saveCredentials} = useAuthCredentials();
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      authService.updateToken(authCredentials.token);
      saveCredentials(authCredentials);
      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
    },
  });

  return {
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}

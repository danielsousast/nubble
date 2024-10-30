import {useMutation} from '@tanstack/react-query';
import {authService} from '../authService';
import {useAuthCredentials} from '@/presentation/providers/';
import {useSearchHistoryService} from '@/services/searchHistory';

export function useAuthSignOut() {
  const {removeCredentials} = useAuthCredentials();
  const {clearUserList} = useSearchHistoryService();
  const mutation = useMutation<string, unknown, void>({
    mutationFn: authService.signOut,
    retry: false,
    onSettled: () => {
      removeCredentials();
      clearUserList();
    },
  });

  return {
    isLoading: mutation.isPending,
    signOut: () => mutation.mutate(),
  };
}

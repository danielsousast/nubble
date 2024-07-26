import {userService} from '../userService';
import {usePaginatedList} from '@/domain/shared/usePaginatedList';

export function useSearchUser(search: string) {
  return usePaginatedList(['users'], () => userService.searchUsers(search), {
    enabled: !!search?.length,
    staleTime: 30000, // 30 seconds
  });
}

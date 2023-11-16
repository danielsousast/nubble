import {useQuery} from '@tanstack/react-query';
import {userService} from '../userService';
import {ReactQueryKeys} from '@/common/enums';

export function useUserGetById(id: number) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [ReactQueryKeys.UseUserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 10, // 10 seconds
  });

  return {
    user: data,
    isError,
    isLoading,
    refetch,
    isFetching,
  };
}

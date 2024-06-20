import {useEffect, useState} from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';
import {Response} from './paginationTypes';

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}
export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Response<Data>>,
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const {data, isError, isLoading, refetch, fetchNextPage, hasNextPage} =
    useInfiniteQuery({
      queryKey,
      queryFn: async ({pageParam = 1}) => await getList(pageParam as number),
      initialPageParam: 1,
      getNextPageParam: ({meta}) => {
        if (meta.hasNextPage) {
          return meta.currentPage + 1;
        }
        return undefined;
      },
    });

  useEffect(() => {
    if (data) {
      const newList = data.pages.reduce<Data[]>((prev, current) => {
        return [...prev, ...current.data];
      }, []);
      setList(newList);
    }
  }, [data]);

  return {
    list,
    isError: isError,
    isLoading: isLoading,
    refresh: refetch,
    fetchNextPage: fetchNextPage,
    hasNextPage: !!hasNextPage,
  };
}

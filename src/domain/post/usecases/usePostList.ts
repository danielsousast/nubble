import {usePaginatedList, postService, Post} from '@/domain';

export function usePostList() {
  return usePaginatedList<Post>(postService.getList);
}

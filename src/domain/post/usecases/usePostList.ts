import {ReactQueryKeys} from '@/common/enums';
import {usePaginatedList, postService, Post} from '@/domain';

export function usePostList() {
  return usePaginatedList<Post>([ReactQueryKeys.PostList], postService.getList);
}

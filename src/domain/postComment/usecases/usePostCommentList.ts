import {ReactQueryKeys} from '@/common/enums';
import {usePaginatedList, postCommentService, PostComment} from '@/domain';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getList(page, postId);
  }
  return usePaginatedList<PostComment>(
    [ReactQueryKeys.PostCommentsList, postId],
    getList,
  );
}

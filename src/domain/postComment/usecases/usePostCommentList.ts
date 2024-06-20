import {ReactQueryKeys} from '@/common/enums';
import {usePaginatedList, postCommentService, PostComment} from '@/domain';

export function usePostCommentList(postId: number) {
  async function getList(page: number) {
    const response = await postCommentService.getList(page, postId);
    return response;
  }
  return usePaginatedList<PostComment>(
    [ReactQueryKeys.PostCommentsList, postId],
    getList,
  );
}

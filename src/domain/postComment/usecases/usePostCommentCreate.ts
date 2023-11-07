import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';
import {MutationOptions, useMutation} from '@/domain/shared/useMutation';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {loading, error, mutate} = useMutation<string, PostComment>(
    message => postCommentService.create(postId, message),
    options,
  );

  async function createComment(message: string) {
    await mutate(message);
  }

  return {
    createComment,
    loading,
    error,
  };
}

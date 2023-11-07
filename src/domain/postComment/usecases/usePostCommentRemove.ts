import {postCommentService} from '../postCommentService';
import {MutationOptions, useMutation} from '@/domain/shared/useMutation';

export function usePostCommentRemove(options?: MutationOptions<string>) {
  return useMutation<{postCommentId: number}, string>(
    ({postCommentId}) => postCommentService.remove(postCommentId),
    options,
  );
}

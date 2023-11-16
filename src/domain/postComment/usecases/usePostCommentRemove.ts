import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postCommentService} from '../postCommentService';
import {ReactQueryKeys} from '@/common/enums';
import {MutationOptions} from '@/domain/shared/useMutation';

export function usePostCommentRemove(
  postId: number,
  options?: MutationOptions<string>,
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<string, unknown, {postCommentId: number}>({
    mutationFn: ({postCommentId}) => postCommentService.remove(postCommentId),
    onSuccess: message => {
      queryClient.invalidateQueries({
        queryKey: [ReactQueryKeys.PostCommentsList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: () => {
      if (options?.onError) {
        options?.onError(options.errorMessage || 'mensagem genérica');
      }
    },
  });

  return {
    removePostComment: mutation.mutate,
  };
}

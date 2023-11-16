import {useMutation, useQueryClient} from '@tanstack/react-query';
import {postCommentService} from '../postCommentService';
import {PostComment} from '../postCommentTypes';
import {ReactQueryKeys} from '@/common/enums';
import {MutationOptions} from '@/domain/shared/useMutation';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const queryClient = useQueryClient();
  const {mutate, isError, isPending} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      // Invalidate the list query after a successful mutation
      queryClient.invalidateQueries({
        queryKey: [ReactQueryKeys.PostCommentsList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(
          options.errorMessage || 'Ocorreu um erro ao criar o comentário',
        );
      }
    },
  });

  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    createComment,
    isError,
    isLoading: isPending,
  };
}

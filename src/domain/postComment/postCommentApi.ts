import {PaginationParams, ResponseAPI, PostCommentAPI} from '@/domain';
import {httpClient} from '@/infra/httpClient';

interface GetPostCommentsParams extends PaginationParams {
  post_id: number;
}

const PATH = 'user/post_comment';

async function getAll(
  params: GetPostCommentsParams,
): Promise<ResponseAPI<PostCommentAPI>> {
  // add delay fake
  await new Promise(resolve => setTimeout(resolve, 1000));
  const reponse = await httpClient.get<ResponseAPI<PostCommentAPI>>(
    'user/post_comment',
    {
      params,
    },
  );
  return reponse.data;
}

async function create(
  post_id: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await httpClient.post<PostCommentAPI>('user/post_comment', {
    post_id,
    message,
  });
  return response.data;
}

async function remove(postCommentId: number): Promise<{message: string}> {
  const response = await httpClient.delete<{message: string}>(
    `${PATH}/${postCommentId}`,
  );

  return response.data;
}

export const postCommentApi = {
  getAll,
  create,
  remove,
};

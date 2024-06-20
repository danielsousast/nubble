import {
  PaginationParams,
  ResponseAPI,
  PostCommentAPI,
  RemoveCommentResponse,
} from '@/domain';
import {httpClient} from '@/infra/http/httpClient';

interface GetPostCommentsParams extends PaginationParams {
  post_id: number;
}

export const POST_COMMNET_PATH = 'user/post_comment';

async function getAll(
  params: GetPostCommentsParams,
): Promise<ResponseAPI<PostCommentAPI>> {
  const reponse = await httpClient.get<ResponseAPI<PostCommentAPI>>(
    POST_COMMNET_PATH,
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
  const response = await httpClient.post<PostCommentAPI>(POST_COMMNET_PATH, {
    post_id,
    message,
  });
  return response.data;
}

async function remove(postCommentId: number): Promise<RemoveCommentResponse> {
  const response = await httpClient.delete<RemoveCommentResponse>(
    `${POST_COMMNET_PATH}/${postCommentId}`,
  );
  return response.data;
}

export const postCommentApi = {
  getAll,
  create,
  remove,
};

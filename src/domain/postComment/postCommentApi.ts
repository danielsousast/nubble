import {PaginationParams, ResponseAPI, PostCommentAPI} from '@/domain';
import {httpClient} from '@/infra/httpClient';

interface GetPostCommentsParams extends PaginationParams {
  post_id: number;
}

async function getList(
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

export const postCommentApi = {
  getList,
};

import {PaginationParams, ResponseAPI} from '@/domain';
import {PostAPI} from '@/domain/post';
import {httpClient} from '@/infra/http/httpClient';

async function getList(
  params?: PaginationParams,
): Promise<ResponseAPI<PostAPI>> {
  const reponse = await httpClient.get<ResponseAPI<PostAPI>>('user/post', {
    params,
  });
  return reponse.data;
}

export const postApi = {
  getList,
};

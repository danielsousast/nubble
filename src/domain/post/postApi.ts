import {PostAPI} from '@/domain/post';
import {PaginationParams, ResponseAPI} from '@/infra';
import {httpClient} from '@/infra/httpClient';

async function getList(
  params?: PaginationParams,
): Promise<ResponseAPI<PostAPI>> {
  // add delay fake
  await new Promise(resolve => setTimeout(resolve, 1000));
  const reponse = await httpClient.get<ResponseAPI<PostAPI>>('user/post', {
    params,
  });
  return reponse.data;
}

export const postApi = {
  getList,
};

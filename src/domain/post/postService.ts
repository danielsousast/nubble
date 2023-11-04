import {postApi} from './postApi';
import {paginationAdapter, Post, postAdapter, Response} from '@/domain';

async function getList(page: number): Promise<Response<Post>> {
  const response = await postApi.getList({page, per_page: 10});
  return {
    data: response.data.map(postAdapter.toPost),
    meta: paginationAdapter.toMetaDataPage(response.meta),
  };
}

export const postService = {
  getList,
};

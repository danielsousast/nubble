import {postApi} from './postApi';
import {paginationAdapter, Post, postAdapter, Page} from '@/domain';

async function getList(page: number): Promise<Page<Post>> {
  const response = await postApi.getList({page, per_page: 10});
  return {
    data: response.data.map(postAdapter.toPost),
    meta: paginationAdapter.toMetaDataPage(response.meta),
  };
}

export const postService = {
  getList,
};

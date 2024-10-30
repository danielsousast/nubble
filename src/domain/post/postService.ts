import {postApi} from './postApi';
import {paginationAdapter, Post, postAdapter, Response} from '@/domain';

async function getList(page: number): Promise<Response<Post>> {
  const response = await postApi.getList({page, per_page: 10});
  return paginationAdapter.toPageModel(response, postAdapter.toPost);
}

export const postService = {
  getList,
};

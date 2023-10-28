import {Post} from '@/domain/post/postModel';
import {postListMock} from '@/mocks/postListMock';

async function getList(): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};

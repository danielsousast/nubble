import {
  paginationAdapter,
  Response,
  postCommentApi,
  postCommentAdapter,
  PostComment,
} from '@/domain';

async function getList(
  page: number,
  post_id: number,
): Promise<Response<PostComment>> {
  const response = await postCommentApi.getAll({
    page,
    per_page: 10,
    post_id,
  });
  return {
    data: response.data.map(postCommentAdapter.toPostComment),
    meta: paginationAdapter.toMetaDataPage(response.meta),
  };
}

async function create(postId: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(postId, message);
  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);
  return response.message;
}

export const postCommentService = {
  getList,
  create,
  remove,
};

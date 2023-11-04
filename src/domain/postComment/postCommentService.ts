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
  const response = await postCommentApi.getList({
    page,
    per_page: 10,
    post_id,
  });
  return {
    data: response.data.map(postCommentAdapter.toPostComment),
    meta: paginationAdapter.toMetaDataPage(response.meta),
  };
}

export const postCommentService = {
  getList,
};

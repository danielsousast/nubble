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

/**
 * @description user can delete the comment if it is the post author or comment author
 *
 * @param postComment comment to be deleted
 * @param userId the current session user id
 * @param postAuthorId the id of the post author
 */
function isAllowToDelete(
  postComment: PostComment,
  userId: number,
  postAuthorId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};

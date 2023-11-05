import {PostComment, PostCommentAPI} from './postCommentTypes';
import {formatDateRelative} from '@/common/utils/dateUtils';

function toPostComment(postCommentApi: PostCommentAPI): PostComment {
  return {
    id: postCommentApi.id,
    message: postCommentApi.message,
    createdAt: postCommentApi.created_at,
    createdAtRelative: formatDateRelative(postCommentApi.created_at),
    author: {
      id: postCommentApi.user.id,
      profileURL: postCommentApi.user.profile_url,
      name: postCommentApi.user.full_name,
      userName: postCommentApi.user.first_name,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};

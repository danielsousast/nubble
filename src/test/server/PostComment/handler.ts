import {cloneDeep} from 'lodash';
import {http, HttpResponse} from 'msw';
import {mockedResponse} from './mocks';
import {POST_COMMNET_PATH, PostCommentAPI, ResponseAPI} from '@/domain';
import {BASE_URL} from '@/infra';

const FULL_URL = `${BASE_URL}${POST_COMMNET_PATH}`;

let inMemoryResponse = cloneDeep(mockedResponse.mockedPostComments);

export function resetInMemoryResponse() {
  inMemoryResponse = cloneDeep(mockedResponse.mockedPostComments);
}

export const postCommentHandlers = [
  http.get(FULL_URL, async () => {
    const response: ResponseAPI<PostCommentAPI> = inMemoryResponse;

    return HttpResponse.json(response, {status: 200});
  }),
  http.post<any, {post_id: number; message: string}>(
    FULL_URL,
    async ({request}) => {
      const body = await request.json();

      const newPostCommentAPI: PostCommentAPI = {
        ...mockedResponse.postCommentAPI,
        id: 999,
        post_id: body.post_id,
        message: body.message,
      };

      inMemoryResponse.data = [newPostCommentAPI, ...inMemoryResponse.data];
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total + 1,
      };

      return HttpResponse.json(newPostCommentAPI, {status: 201});
    },
  ),
  http.delete<{postCommentId: string}>(
    `${FULL_URL}/:postCommentId`,
    async ({params}) => {
      inMemoryResponse.data = inMemoryResponse.data.filter(
        item => item.id.toString() !== params.postCommentId,
      );
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total - 1,
      };

      return HttpResponse.json({message: 'removed'}, {status: 200});
    },
  ),
];

import {http, HttpResponse} from 'msw';
import {mockedResponse} from './mocks';
import {POST_COMMNET_PATH, PostCommentAPI, ResponseAPI} from '@/domain';
import {BASE_URL} from '@/infra';

export const postCommentHandlers = [
  // @ts-ignore
  http.get(`${BASE_URL}${POST_COMMNET_PATH}`, async () => {
    const response: ResponseAPI<PostCommentAPI> =
      mockedResponse.mockedPostComments;

    return HttpResponse.json(response, {status: 200});
  }),
];

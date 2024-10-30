import {http, HttpResponse} from 'msw';
import {userMocked} from './mocks';
import {ResponseAPI} from '@/domain';
import {USER_PATH_URL, UserAPI} from '@/domain/user';
import {BASE_URL} from '@/infra';

const FULL_URL = `${BASE_URL}${USER_PATH_URL}`;

export const userHandlers = [
  http.get(FULL_URL, async () => {
    const response: ResponseAPI<UserAPI> = userMocked.mockedUserResponse;

    return HttpResponse.json(response, {status: 200});
  }),
  http.get<{userId: string}>(`${FULL_URL}/:userId`, async ({params}) => {
    const userApi = userMocked.userList.find(
      user => user.id.toString() === params.userId,
    );

    return HttpResponse.json(userApi, {status: 200});
  }),
];

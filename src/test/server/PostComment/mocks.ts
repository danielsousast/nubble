import {ResponseAPI} from '@/domain';
import {AuthCredentials} from '@/domain/auth/authTypes';
import {PostCommentAPI} from '@/domain/postComment/postCommentTypes';
import {UserAPI, userAdapter} from '@/domain/user';

const POST_ID = 1;

const jhonUserAPI: UserAPI = {
  id: 4,
  first_name: 'Jhon',
  last_name: 'Doe',
  username: 'jhondoe',
  email: 'jhondoe@coffstack.com',
  profile_url: 'example.com',
  is_online: true,
  full_name: 'Jhon Doe',
};

const jhonAuthCredentials: AuthCredentials = {
  token: 'jhondoe',
  user: userAdapter.toUser(jhonUserAPI),
  tokenExpiresAt: '123abc',
  refreshToken: '123abc',
};

const jhonCommentAPI: PostCommentAPI = {
  id: 30,
  message: 'comentário para deletar',
  user_id: 4,
  post_id: POST_ID,
  created_at: '2023-10-18T22:19:17.000+00:00',
  updated_at: '2023-10-21T07:46:21.821+00:00',
  user: jhonUserAPI,
  meta: {},
};

const postCommentAPI: PostCommentAPI = {
  id: 97,
  message: 'comentário aleatório',
  user_id: 4,
  post_id: POST_ID,
  created_at: '2023-10-18T22:19:17.000+00:00',
  updated_at: '2023-10-21T07:46:21.821+00:00',
  user: {
    id: 7,
    first_name: 'Marcelo',
    last_name: 'Tavares',
    username: 'celotavares',
    email: 'celotavares@coffstack.com',

    profile_url:
      'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/6-marcelo.png',
    is_online: false,
    full_name: 'Marcelo Tavares',
  },

  meta: {},
};

export const mockedPostComments: ResponseAPI<PostCommentAPI> = {
  data: [postCommentAPI, jhonCommentAPI],
  meta: {
    total: 1,
    per_page: 10,
    current_page: 1,
    last_page: 1,
    first_page: 1,
    first_page_url: '/?page=1',
    last_page_url: '/?page=1',
    next_page_url: null,
    previous_page_url: null,
  },
};

export const mockedResponse = {
  POST_ID,
  mockedPostComments,
  postCommentAPI,
  jhonCommentAPI,
  jhonUserAPI,
  jhonAuthCredentials,
};

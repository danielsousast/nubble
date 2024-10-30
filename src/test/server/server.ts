import {setupServer} from 'msw/node';
import {postCommentHandlers} from './PostComment/handler';
import {userHandlers} from './User/handler';
export {mockedResponse as mockedPostComment} from './PostComment/mocks';

export const server = setupServer(...postCommentHandlers, ...userHandlers);

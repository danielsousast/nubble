import {setupServer} from 'msw/node';
import {postCommentHandlers} from './PostComment/handler';

export const server = setupServer(...postCommentHandlers);

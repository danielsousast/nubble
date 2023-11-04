import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer MQ.Z4N1Mql51Q__3VqvNDYNfaw1EzZPRn0jbnJwxP3_0mj5415qUAfVfEBonFRM',
  },
});

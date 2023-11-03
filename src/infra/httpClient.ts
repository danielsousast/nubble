import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer Mg.328lUNj3QehOXEySVGKP7uyggkONy6uUZyUk7yANoDfOFaTyab1iHhIexbAt',
  },
});

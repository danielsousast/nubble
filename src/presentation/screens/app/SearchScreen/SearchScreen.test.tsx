import React from 'react';
import {fireEvent, screen} from '@testing-library/react-native';
import {AppStack, Routes} from '@/main/navigator';
import {authCredentialsStorage} from '@/presentation/providers';
import {mockUtils} from '@/test/mocks/mockUtils';
import {server} from '@/test/server';
//import {userMocked} from '@/test/server/User/mocks';
import {renderScreen} from '@/test/utils';

beforeAll(() => {
  jest
    .spyOn(authCredentialsStorage, 'get')
    .mockResolvedValue(mockUtils.jhonAuthCredentials);
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
  jest.resetAllMocks();
});

describe('integration test - SearchScreen', () => {
  test('should be able to search for users', async () => {
    renderScreen(<AppStack initialRouteName={Routes.SEARCH} />);

    const inputText = screen.getByPlaceholderText(/Pesquise por um usuário/i);
    expect(inputText).toBeTruthy();
    fireEvent.changeText(inputText, 'mar');

    //const user1 = await screen.findByText(userMocked.user1.username);
    //const user2 = await screen.findByText(userMocked.user2.username);
    //expect(user1).toBeTruthy();
    //expect(user2).toBeTruthy();
  });
});

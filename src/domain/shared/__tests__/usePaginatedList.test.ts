import {waitFor} from '@testing-library/react-native';
import {MetaDataPage, Response} from '../paginationTypes';
import {usePaginatedList} from '../usePaginatedList';
import {customRenderHook} from '@/test/utils';

const page1 = ['item1', 'item2', 'item3'];
const page2 = ['item4', 'item5', 'item6'];

function getList(page: number): Promise<Response<string>> {
  const data = page === 1 ? page1 : page2;

  const meta: MetaDataPage = {
    currentPage: page,
    firstPage: 1,
    lastPage: 2,
    hasNextPage: page === 1,
    hasPreviousPage: page === 2,
    perPage: 3,
    total: 6,
  };

  return Promise.resolve({data, meta});
}

const mockedGetList = jest.fn(getList);

describe('usePaginatedList', () => {
  it('should returns all pages together and stops fetching on last page', async () => {
    const {result} = customRenderHook(() =>
      usePaginatedList(['key'], mockedGetList),
    );
    await waitFor(() => expect(result.current.list).toStrictEqual(page1));
    // call page 2
    result.current.fetchNextPage();
    await waitFor(() =>
      expect(result.current.list).toStrictEqual([...page1, ...page2]),
    );

    // call a inexistent page
    result.current.fetchNextPage();
    expect(mockedGetList).toHaveBeenCalledTimes(2);
  });
});

export interface MetaDataPageAPI {
  total: number; // 24;
  per_page: number; // 10;
  current_page: number; // 1;
  last_page: number; // 3;
  first_page: number; // 1;
  first_page_url: string; // '/?page=1';
  last_page_url: string; // '/?page=3';
  next_page_url: string | null; // '/?page=2';
  previous_page_url: string | null; // null;
}

/**
 * @description Interface que define o formato de uma página de dados da API.
 * @template Data Tipo do dado da página.
 */
export interface ResponseAPI<Data> {
  meta: MetaDataPageAPI;
  data: Data[];
}

export interface PaginationParams {
  page?: number;
  per_page?: number;
}

export interface MetaDataPage {
  total: number; // 24;
  perPage: number; // 10;
  currentPage: number; // 1;
  lastPage: number; // 3;
  firstPage: number; // 1;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Response<Data> {
  meta: MetaDataPage;
  data: Data[];
}

import {
  MetaDataPage,
  MetaDataPageAPI,
  Response,
  ResponseAPI,
} from './paginationTypes';

function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    lastPage: meta.last_page,
    firstPage: meta.first_page,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
  };
}
function toPageModel<ApiType, ModelType>(
  page: ResponseAPI<ApiType>,
  adapterToModel: (api: ApiType) => ModelType,
): Response<ModelType> {
  return {
    meta: toMetaDataPage(page.meta),
    data: page.data.map(adapterToModel),
  };
}
export const paginationAdapter = {
  toMetaDataPage,
  toPageModel,
};

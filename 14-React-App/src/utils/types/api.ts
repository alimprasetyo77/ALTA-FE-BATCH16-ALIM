export type Response<T = unknown> = {
  message: string;
  payload: T;
};

export type PayloadPagination<T = unknown> = {
  totalItems: number;
  datas: T;
  totalPages: number;
  currentPage: number;
};

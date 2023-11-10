/* eslint-disable @typescript-eslint/no-explicit-any */
export type Response<T = any> = {
  data: any;
  message: string;
  payload: T;
};

export type PayloadPagination<T = any> = {
  totalItems: number;
  datas: T;
  totalPages: number;
  currentPage: number;
};


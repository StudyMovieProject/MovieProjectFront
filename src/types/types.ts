export interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T;
}

// type MovieListResponse = ApiResponse<IMovieList>

import axios from 'axios';

const BASE_PATH =
  window.location.hostname === 'localhost'
    ? 'http://localhost:8080'
    : 'http://localhost:8080';

export type IGetMovieList = 'POPULAR' | 'LATEST' | 'UPCOMING';

export async function getMovieList(status: IGetMovieList) {
  const response = await axios.get(`${BASE_PATH}/api/movies/status/${status}`);
  return response.data;
}

export async function getMovieDetail(movieId: number) {
  const response = await axios.get(`${BASE_PATH}/api/movies/${movieId}`);
  return response.data;
}

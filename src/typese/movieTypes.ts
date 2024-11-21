export interface IMovieDetail {
  id: number;
  title: string;
  titleEn: string;
  trailer: string | null;
  plot: string;
  posterImage: string;
  backdropImage: string;
  productYear: number;
  productDate: string;
  showTime: number;
  startDate: string;
  endDate: string;
  popularity: number;
  movieCd: number;
}

export type IMovieList = IMovieDetail[];

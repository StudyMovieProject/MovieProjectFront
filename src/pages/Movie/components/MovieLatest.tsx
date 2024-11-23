import { Box } from '@mui/material';
import { getMovieList } from '../../../api/movieApi';
import { useQuery } from '@tanstack/react-query';
import MovieCardSkeleton from '../../../components/MovieCard/MovieCardSkeleton';
import MovieCard from '../../../components/MovieCard/MovieCard';
import { IMovieList } from '../../../typese/movieTypes';
import { ApiResponse } from '../../../typese/types';
import { useMovieSortStore } from '../../../store/movieStore';
import { useEffect } from 'react';
import useScreenSizeValue from '../../../hooks/useScreenSizeValue';

function MovieLatest() {
  const screenSize = useScreenSizeValue(2, 4, 6);

  const { isLoading: moviesLatestLoading, data: moviesLatestData } = useQuery<
    ApiResponse<IMovieList>
  >({
    queryKey: ['movieList'],
    queryFn: () => getMovieList('LATEST'),
  });

  const { sort, toggleSortByRelease } = useMovieSortStore();

  const stateMovies = Array.isArray(moviesLatestData?.data)
    ? moviesLatestData?.data.slice().sort((a, b) => {
        if (sort) {
          // 가나다순 정렬
          return a.title.localeCompare(b.title, 'ko');
        } else {
          // 개봉일순 정렬 (productDate 내림차순)
          return (
            new Date(b.productDate).getTime() -
            new Date(a.productDate).getTime()
          );
        }
      })
    : [];

  useEffect(() => {
    return () => {
      toggleSortByRelease();
    };
  }, []);
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${screenSize}, 1fr)`,
        gap: '8px',
      }}
    >
      {moviesLatestLoading
        ? [...Array.from(Array(12).keys())].map((item) => (
            <MovieCardSkeleton key={item} />
          ))
        : stateMovies?.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterImage={movie.posterImage}
              popularity={movie.popularity}
            />
          ))}
    </Box>
  );
}

export default MovieLatest;

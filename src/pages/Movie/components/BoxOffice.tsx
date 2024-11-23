import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getMovieList } from '../../../api/movieApi';
import MovieCardSkeleton from '../../../components/MovieCard/MovieCardSkeleton';
import MovieCard from '../../../components/MovieCard/MovieCard';
import { ApiResponse } from '../../../typese/types';
import { IMovieList } from '../../../typese/movieTypes';
import useScreenSizeValue from '../../../hooks/useScreenSizeValue';

function BoxOffice() {
  const screenSize = useScreenSizeValue(2, 4, 6);

  const { isLoading: moviesLoading, data: moviesData } = useQuery<
    ApiResponse<IMovieList>
  >({
    queryKey: ['movieList'],
    queryFn: () => getMovieList('LATEST'),
    gcTime: Infinity,
  });

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${screenSize}, 1fr)`,
        gap: '8px',
      }}
    >
      {moviesLoading
        ? [...Array.from(Array(12).keys())].map((item) => (
            <MovieCardSkeleton key={item} />
          ))
        : Array.isArray(moviesData?.data) && //.map is not a function 에러 해결
          moviesData?.data.map((movie) => (
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

export default BoxOffice;

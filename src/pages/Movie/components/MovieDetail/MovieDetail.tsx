import { Box, Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getMovieDetail } from '../../../../api/movieApi';
import MovieDetailPoster from './components/MovieDetailPoster';
import MovieSummary from './components/MovieSummary';
import MovieDetailPlot from './components/MovieDetailPlot';
import MovieDetailSkeleton from './components/MovieDetailSkeleton';
import { IMovieDetail } from '../../../../typese/movieTypes';
import { ApiResponse } from '../../../../typese/types';

function MovieDetail() {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('MovieCode');
  const { isLoading: movieLoading, data: movieData } = useQuery<
    ApiResponse<IMovieDetail>
  >({
    queryKey: ['movieDetail'],
    queryFn: () => getMovieDetail(Number(movieId)),
    gcTime: 0,
  });

  return (
    <>
      {movieLoading ? (
        <MovieDetailSkeleton />
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 4fr',
            gap: '40px',
          }}
        >
          <MovieDetailPoster image={String(movieData?.data.posterImage)} />

          <Box>
            <MovieSummary
              title={String(movieData?.data.title)}
              startDate={String(movieData?.data.startDate)}
              endDate={String(movieData?.data.endDate)}
              showTime={Number(movieData?.data.showTime)}
              popularity={Number(movieData?.data.popularity)}
            />
            <MovieDetailPlot plot={String(movieData?.data.plot)} />
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: '40px', width: '8rem', height: '2.5rem' }}
            >
              예매하기
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}

export default MovieDetail;

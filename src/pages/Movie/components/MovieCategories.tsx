import { useQueries } from '@tanstack/react-query';
import { getMovieList, IGetMovieList } from '../../../api/movieApi';
import Carousel from '../../../components/Carousel';
import { Card, CardHeader } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function MovieCategories() {
  const navigate = useNavigate();

  const movieStatus: IGetMovieList[] = ['LATEST', 'POPULAR', 'UPCOMING'];
  const [latestQuery, popularQuery, upcomingQuery] = useQueries({
    queries: movieStatus.map((status) => ({
      queryKey: ['movieList', status],
      queryFn: () => getMovieList(status),
      gcTime: Infinity,
    })),
  });

  const { isLoading: popularLoading, data: popularData } = popularQuery;
  const { isLoading: latestLoading, data: latestData } = latestQuery;
  const { isLoading: upcomingLoading, data: upcomingData } = upcomingQuery;

  return (
    <>
      <Card>
        <CardHeader
          onClick={() => navigate('/movie/box-office')}
          title="인기영화"
          subheader="더 많은 영화보기 >"
          titleTypographyProps={{
            borderLeft: '0.125rem solid black',
            paddingLeft: '0.5rem',
            paddingBottom: '0.25rem',
          }}
          sx={{
            cursor: 'pointer',
          }}
        />
        <Carousel
          isLoading={popularLoading}
          cardList={popularData?.data || []}
        />
      </Card>
      <Card>
        <CardHeader
          onClick={() => navigate('/movie/latest')}
          title="최신영화"
          subheader="더 많은 영화보기 >"
          titleTypographyProps={{
            borderLeft: '0.125rem solid black',
            paddingLeft: '0.5rem',
            paddingBottom: '0.25rem',
          }}
          sx={{
            cursor: 'pointer',
          }}
        />
        <Carousel isLoading={latestLoading} cardList={latestData?.data || []} />
      </Card>
      <Card>
        <CardHeader
          onClick={() => navigate('/movie/comming')}
          title="상영예정"
          subheader="더 많은 영화보기 >"
          titleTypographyProps={{
            borderLeft: '0.125rem solid black',
            paddingLeft: '0.5rem',
            paddingBottom: '0.25rem',
          }}
          sx={{
            cursor: 'pointer',
          }}
        />
        <Carousel
          isLoading={upcomingLoading}
          cardList={upcomingData?.data || []}
        />
      </Card>
    </>
  );
}

export default MovieCategories;

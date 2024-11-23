import { Box, Button, Paper } from '@mui/material';
import MovieCard from './MovieCard/MovieCard';
import MovieCardSkeleton from './MovieCard/MovieCardSkeleton';
import { useEffect, useLayoutEffect, useState } from 'react';
import { IMovieList } from '../typese/movieTypes';
import useScreenSize from '../hooks/useScreenSize';

interface CarouselProps {
  isLoading: boolean;
  cardList: IMovieList;
}

function Carousel({ isLoading, cardList = [] }: CarouselProps) {
  const { isTablet, isMobile } = useScreenSize();

  //let cardNum = ;
  const [cardNum, setCardNum] = useState(() =>
    isMobile ? 2 : isTablet ? 5 : 6
  );
  useLayoutEffect(() => {
    // 화면 크기에 맞춰 초기 렌더링 전 카드 수 설정
    setCardNum(isMobile ? 2 : isTablet ? 5 : 6);
  }, [isTablet, isMobile]);

  const [sliceNum, setSliceNum] = useState([0, cardNum]);
  const [animate, setAnimate] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);

  useEffect(() => {
    // 카드 개수가 바뀌면 슬라이스 범위도 업데이트
    setSliceNum([0, cardNum]);
  }, [cardNum]);

  const onPrevClick = () => {
    if (!cardList) return;
    if (btnLoading) return;
    setBtnLoading(true);
    setAnimate(true);
    setAnimationClass('rotate-old');
    setSliceNum((prev) => {
      const prevStart = prev[0] - cardNum;
      const prevEnd = prev[1] - cardNum;
      if (prevStart < 0) {
        const temp = cardList.length % cardNum;
        const returnNum = cardList.length - temp;
        return [returnNum - cardNum, returnNum];
      }
      return [prevStart, prevEnd];
    });
    setAnimationClass('rotate-new');
    setBtnLoading(false);
  };

  const onNextClick = () => {
    if (!cardList) return;
    if (btnLoading) return;
    setBtnLoading(true);
    setAnimate(true);
    setAnimationClass('rotate-old');
    setSliceNum((prev) => {
      const nextStart = prev[0] + cardNum;
      const nextEnd = prev[1] + cardNum;
      if (nextEnd > cardList.length) {
        return [0, cardNum];
      }
      return [nextStart, nextEnd];
    });
    setAnimationClass('rotate-new');
    setBtnLoading(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        padding: '2.8125rem',
      }}
    >
      <Paper
        sx={{
          padding: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cardNum}, 1fr)`,
            gap: '1rem',
          }}
        >
          {isLoading
            ? [...Array.from(Array(cardNum).keys())].map((item) => (
                <MovieCardSkeleton key={item} />
              ))
            : cardList
                .slice(...sliceNum)
                .map((movie) => (
                  <MovieCard
                    className={animate ? animationClass : ''}
                    key={movie.id}
                    popularity={movie.popularity}
                    id={movie.id}
                    title={movie.title}
                    posterImage={movie.posterImage}
                  />
                ))}
        </Box>
      </Paper>
      <Button
        onClick={onNextClick}
        sx={{
          minWidth: '0',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(128, 128, 128, 0.7)',
          fontSize: '1.5rem',
          borderRadius: '100%',
          width: '2.5rem',
          aspectRatio: 1,
          top: '40%',
          left: '97%',
          fontWeight: 800,
        }}
      >
        &gt;
      </Button>
      <Button
        onClick={onPrevClick}
        sx={{
          minWidth: '0',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(128, 128, 128, 0.7)',
          fontSize: '1.5rem',
          borderRadius: '100%',
          width: '2.5rem',
          aspectRatio: 1,
          top: '40%',
          right: '97%',
          fontWeight: 800,
        }}
      >
        <span>&lt;</span>
      </Button>
    </Box>
  );
}

export default Carousel;

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function useScreenSize() {
  const theme = useTheme();

  //테스트 시 모바일 > 태블릿 > 데스크탑 순서로 조건 확인
  // 각 브레이크포인트에 따른 화면 크기 확인
  const isDesktop = useMediaQuery('(min-width: 1024px)'); // lg 이상 (데스크탑)
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)'); // md에서 lg 사이 (태블릿)
  const isMobile = useMediaQuery('(max-width:767px)'); // sm 이하 (모바일)

  return { isDesktop, isTablet, isMobile };
}

export default useScreenSize;

import { useEffect, useState } from 'react';
import useScreenSize from './useScreenSize';

function useScreenSizeValue<T>(
  mobileValue: T,
  tabletValue: T,
  desktopValue: T
) {
  const { isMobile, isTablet } = useScreenSize();
  const [responsiveValue, setResponsiveValue] = useState<T>(mobileValue);

  useEffect(() => {
    if (isMobile) {
      setResponsiveValue(mobileValue);
    } else if (isTablet) {
      setResponsiveValue(tabletValue);
    } else {
      setResponsiveValue(desktopValue);
    }
  }, [isMobile, isTablet, mobileValue, tabletValue, desktopValue]);

  return responsiveValue;
}

export default useScreenSizeValue;

/* 사용예시 */
// 화면 크기에 따라 카드의 개수를 설정 (모바일: 2, 태블릿: 4, 데스크탑: 6)
// const cardNum = useScreenSizeValue(2, 4, 6);

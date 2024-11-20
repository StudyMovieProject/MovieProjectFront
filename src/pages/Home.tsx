import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Outlet />
      <p>메인 페이지입니다</p>
      {/* TODO
    // [ ] 캐러셀 + 추후 영화 이미지 api */}
    </>
  );
}

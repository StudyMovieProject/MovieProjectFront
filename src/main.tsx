import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </QueryClientProvider>
  </StrictMode>
);

// import Header from '../component/Header';
// import NavBar from '../component/Navbar';

// function Main() {
//   return (
//     <>
//       <Header />
//       <NavBar />
//       <p>메인 페이지입니다</p>
//     </>
//   );
// }

// export default Main;

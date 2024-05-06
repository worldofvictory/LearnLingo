import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loaders } from './Loader/Loader.styled';
const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Teachers = lazy(() => import('../pages/Teachers/Teachers'));
export const App = () => {
  return (
<>
   <Suspense fallback={<Loaders />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             <Route path="teachers" element={<Teachers />} />
             </Route>
           </Routes>
      </Suspense>
      </>
  );
}

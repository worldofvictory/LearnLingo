import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loaders } from './Loader/Loader.styled';
import { ToastContainer } from 'react-toastify';
import  PrivateRoute  from '../components/PrivateRoute';
const Layout = lazy(() => import('../components/Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Teachers = lazy(() => import('../pages/Teachers/Teachers'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));

function App() {
  return (
    <>
      <Suspense fallback={<Loaders />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="teachers" element={<Teachers />} />
            <Route
              path="favorite"
              element={
                <PrivateRoute>
                  <Favorite />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

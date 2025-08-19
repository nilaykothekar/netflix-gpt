import { Fragment } from 'react/jsx-runtime';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router';
import Header from './Header';
import { RouterProvider } from 'react-router';

const Body = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default Body;

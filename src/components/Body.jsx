import { Fragment } from "react/jsx-runtime";
import Login from "../pages/Login";
import Browse from "../pages/Browse";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
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

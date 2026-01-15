import { Fragment } from "react/jsx-runtime";
import Login from "../pages/Login";
import Browse from "../pages/Browse";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/slices/userSlice";

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

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or signed up
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default Body;

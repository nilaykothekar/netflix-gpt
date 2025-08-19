import { Fragment } from 'react/jsx-runtime';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  return (
    <Fragment>
      <Login />
      <Browse />
    </Fragment>
  );
};

export default Body;

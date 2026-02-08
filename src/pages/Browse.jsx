import { Fragment } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <Fragment>
      <Header />
      <p>Browse</p>
    </Fragment>
  );
};

export default Browse;

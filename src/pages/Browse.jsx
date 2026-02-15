import { Fragment } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Banner from "../components/Banner";
import MoviesList from "../components/MoviesList";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <Fragment>
      <Header />
      <Banner />
      <MoviesList />
    </Fragment>
  );
};

export default Browse;

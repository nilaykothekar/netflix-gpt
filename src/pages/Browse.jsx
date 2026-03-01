import { Fragment } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Banner from "../components/Banner";
import MoviesList from "../components/MoviesList";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <Fragment>
      <Header />
      <Banner />
      <MoviesList />
    </Fragment>
  );
};

export default Browse;

import { Fragment } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Banner from "../components/Banner";
import MoviesList from "../components/MoviesList";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Search from "../components/Search";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  const isSearch = useSelector((store) => store.gpt.showSearch);

  return (
    <Fragment>
      <Header />
      {isSearch ? (
        <Search />
      ) : (
        <>
          <Banner />
          <MoviesList />
        </>
      )}
    </Fragment>
  );
};

export default Browse;

import { useSelector } from "react-redux";
import Movies from "./Movies";

const MoviesList = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  return (
    <div className="bg-black">
      <div className="relative -mt-36 z-20">
        <Movies title="Now Playing" movies={nowPlayingMovies} />
        <Movies title="Popular" movies={popularMovies} />
        <Movies title="Top Rated" movies={topRatedMovies} />
        <Movies title="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default MoviesList;

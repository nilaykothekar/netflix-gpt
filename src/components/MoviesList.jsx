import { useSelector } from "react-redux";
import Movies from "./Movies";

const MoviesList = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  return (
    <div className="bg-black">
      <div className="relative -mt-36 z-20">
        <Movies title="Now Playing" movies={nowPlayingMovies} />
        <Movies title="Popular" movies={nowPlayingMovies} />
        <Movies title="Top Rated" movies={nowPlayingMovies} />
        <Movies title="Upcoming" movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default MoviesList;

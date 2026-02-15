import { useTrailer } from "../hooks/useTrailer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Banner = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailer = useSelector((store) => store.movies?.trailer);

  const mainMovie = movies?.[0];
  const movieId = mainMovie?.id;

  // ✅ always call hook
  useTrailer(movieId);

  if (!movies || movies.length === 0) return null;

  const title = mainMovie?.title;
  const overview = mainMovie?.overview;

  return (
    <div>
      <section className="flex justify-center items-start h-[96vh] flex-col px-20 absolute text-white bg-linear-to-r from-black to-transparent">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 leading-8 w-1/2 font-semibold">{overview}</p>
        <div className="mt-6">
          <button className="bg-white text-black px-6 py-2 rounded font-bold">
            &#9654; Play
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded ml-2 font-bold">
            &#x24D8; More Info
          </button>
        </div>
      </section>
      <section className="h-[96vh]">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
          title="YouTube video player"
          allowFullScreen
        />
      </section>
    </div>
  );
};

export default Banner;

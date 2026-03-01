import Card from "./Card";

const Movies = ({ title, movies }) => {
  return (
    <>
      <h3 className="text-lg font-bold text-white mx-3">{title}</h3>
      <section className="flex overflow-x-scroll p-4">
        <div className="flex">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Movies;

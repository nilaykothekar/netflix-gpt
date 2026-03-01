import { CDN_IMG_URL } from "../utils/constants";

const Card = ({ movie }) => {
  return (
    <div className="w-60">
      <img
        src={`${CDN_IMG_URL}${movie.poster_path}`}
        alt={movie.title}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Card;

import { NETFLIX_BG } from "../utils/constants";
import GPTSearch from "./GPTSearch";
import GPTSuggestions from "./GPTSuggestions";

const Search = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center flex-col"
      style={{ backgroundImage: `url(${NETFLIX_BG})` }}
    >
      <GPTSearch />
      <GPTSuggestions />
    </section>
  );
};

export default Search;

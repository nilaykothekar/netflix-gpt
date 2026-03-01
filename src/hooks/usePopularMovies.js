import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/slices/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?.page=1", API_OPTIONS);
            const data = await response.json();
            console.log("popular movies:", data?.results);
            dispatch(addPopularMovies(data?.results));
        }
        catch (error) {
            console.error("Error in fetching popular movies", error);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;
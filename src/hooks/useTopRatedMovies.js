import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../redux/slices/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
            const data = await response.json();
            console.log("top rated movies:", data?.results);
            dispatch(addTopRatedMovies(data?.results));
        } catch (error) {
            console.error("Error fetching top rated movies:", error);
        }
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/slices/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
            const data = await response.json();
            console.log("upcoming movies", data?.results);
            dispatch(addUpcomingMovies(data?.results));
        } catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;
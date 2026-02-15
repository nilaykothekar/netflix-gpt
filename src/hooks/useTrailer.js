import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setTrailer } from "../redux/slices/moviesSlice";

export const useTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getTrailer = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
            const data = await response.json();
            const trailer = data?.results?.find(video => video.type === "Trailer" && video.site === "YouTube");
            dispatch(setTrailer(trailer || {}));
        }
        catch (error) {
            console.error("Error fetching trailer", error);
        }
    };

    useEffect(() => {
        if (movieId) {
            getTrailer();
        }
    }, [movieId]);
};

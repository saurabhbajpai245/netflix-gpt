import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";


const usePopularMoveis = () => {
    const dispatch = useDispatch();
fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
  .then(response => response.json())
  .then(response => {
    console.log(response.results);
    dispatch(addPopularMovies(response.results))
  })
  .catch(err => console.error(err));
}

export default usePopularMoveis;
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getMovies } from "../services/movieService";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie-detail/${movie.id}`}>
      <h3>{movie.name}</h3>
      <div>{movie.type}</div>
      <div>{movie.times.join(", ")}</div>
      <img src={movie.poster} width="100px" />
    </Link>
  );
}

export function MovieListPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const movieType = searchParams.get("type");
  const navigate = useNavigate();

  useEffect(() => {
    getMovies({ type: movieType }).then((movieList) => setMovies(movieList));
  }, [movieType]);

  const handle3dClick = () => {
    navigate("/movie-list?type=3d");
  };

  const handle2dClick = () => {
    navigate("/movie-list?type=2d");
  };

  return (
    <section>
      <button onClick={handle3dClick}>3D</button>
      <button onClick={handle2dClick}>2D</button>
      {movies.map((movie) => (
        <MovieCard key={`${movie.name}-${movie.type}`} movie={movie} />
      ))}
    </section>
  );
}

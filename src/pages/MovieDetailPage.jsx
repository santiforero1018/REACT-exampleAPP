import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/movieService";

export function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovieById(id).then((loadedMovie) => setMovie(loadedMovie));
  }, [id]);

  if (!movie) {
    return "loading...";
  }

  return (
    <article>
      <img src={movie.poster} width="400px" />
      <h2>{movie.name}</h2>
      <div>{movie.type}</div>
      <div>{movie.times.join(", ")}</div>
    </article>
  );
}

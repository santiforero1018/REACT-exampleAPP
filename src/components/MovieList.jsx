import { MovieCard } from "./MovieCard";

export const MovieList = (props) => {
  const { list } = props;

  return (
    <ul>
      {list.map((movie) => (
        <MovieCard name={movie.name} />
      ))}
    </ul>
  );
};

import { MovieCard } from "./MovieCard";

export const MovieList = (props) => {
  const { list } = props;

  const handleCheckTime = (movieName) => {
    console.log(`check time clicked from ${movieName}`);
  };

  return (
    <ul>
      {list.map((movie) => (
        <MovieCard name={movie.name} onCheckTimeClick={handleCheckTime} />
      ))}
    </ul>
  );
};

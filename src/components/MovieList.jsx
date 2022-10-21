import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = (props) => {
  const { list } = props;
  const [favourites, setFavourites] = useState([]);

  const handleFavouriteClick = (movieName) => {
    console.log(`favourite clicked from ${movieName}`);

    let newFavourites = [...favourites];

    if (!favourites.includes(movieName)) {
      newFavourites = [...newFavourites, movieName];
    } else {
      newFavourites = newFavourites.filter((movie) => movieName != movie);
    }

    setFavourites(newFavourites);

    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("favourites");
    const storedFavourites = JSON.parse(localStorageData);

    setFavourites(storedFavourites);
  }, []);

  return (
    <ul>
      {list.map((movie) => (
        <MovieCard
          key={movie.name}
          name={movie.name}
          onFavouriteClick={handleFavouriteClick}
          isFavourite={favourites.includes(movie.name)}
        />
      ))}
    </ul>
  );
};

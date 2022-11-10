import { useState, useEffect } from "react";

export function useFavourites() {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(movieName) {
    console.log(`favourite clicked from ${movieName}`);

    let newFavourites = [...favourites];

    if (!favourites.includes(movieName)) {
      newFavourites = [...newFavourites, movieName];
    } else {
      newFavourites = newFavourites.filter((movie) => movieName != movie);
    }

    setFavourites(newFavourites);

    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem("favourites");
    const storedFavourites = JSON.parse(localStorageData);

    setFavourites(storedFavourites);
  }, []);

  return [favourites, addFavourite];
}

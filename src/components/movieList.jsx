import { useEffect, useState } from "react";
import { MoviCard } from "./moveCard"

export const Ml = (props) => {

    const { list } = props;
    const [favourites, setFavourites] = useState([]); // el estado inicial es cuando no hay peliculas likeadas

    // extraemos el estado actual para realizar cambios y despues que se vean reflejados
    let copyFav = [...favourites];



    const handleFavouriteClick = (movieName) => {
        console.log("movie clicked as favourite: " + movieName);
        if (!favourites.includes(movieName)) {
            copyFav = [...favourites, movieName];
        } else {
            // filtra las peliculas dentro del arreglo
            copyFav = copyFav.filter(movie => movieName != movie);
        }

        setFavourites(copyFav);

        // guardar las peliculas likeadas en el almacenamiento local
        localStorage.setItem('favourites',JSON.stringify(copyFav));
    }

    // para reflejar los cambios dentro de la interfaz al haber cambios
    useEffect(() =>{
        setFavourites(JSON.parse(localStorage.getItem('favourites')));
    }, []);

    console.log({ favourites });
    return <ul>
        {
            // deepcode ignore ReactMissingArrayKeys: <please specify a reason of ignoring this>
            list.map(movie => (<MoviCard name={movie.name} onFavouriteClick={handleFavouriteClick} isFavourite={favourites.includes(movie.name)} />))
        }
    </ul>
}


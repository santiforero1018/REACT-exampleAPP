import { useEffect, useState } from "react";

export function useFav(){
    const [favourites, setFavourites] = useState([]); // el estado inicial es cuando no hay peliculas likeadas

    useEffect(() =>{
        setFavourites(JSON.parse(localStorage.getItem('favourites'))|| []);
    }, []);

    function addFav(movieName){
        console.log("movie clicked as favourite: " + movieName);
        let copyFav = [...favourites];
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

    return [favourites, addFav];
}
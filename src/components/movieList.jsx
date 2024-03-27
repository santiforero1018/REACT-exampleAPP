import { MoviCard } from "./moveCard"
import { useFav } from "../hooks/useFav";

export const Ml = (props) => {

    const { list } = props;
    const [favourites , addFav] = useFav();

    function handleFavouriteClick(movieName){
        addFav(movieName);
    }

    return <ul>
        {
            // deepcode ignore ReactMissingArrayKeys: <please specify a reason of ignoring this>
            list.map(movie => (<MoviCard name={movie.name} onFavouriteClick={handleFavouriteClick} isFavourite={favourites.includes(movie.name)} />))
        }
    </ul>
}


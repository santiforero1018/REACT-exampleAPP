import { MoviCard } from "./moveCard"

export const Ml = (props) => {

    const { list } = props;

    const handleCheckTime = (movieName) => {
        console.log("check time clicked from children: "+ movieName);
    }
    return <ul>
        {
            list.map(movie => (<MoviCard name={movie.name} onCheckTime={handleCheckTime}/>))
        }
    </ul>
}


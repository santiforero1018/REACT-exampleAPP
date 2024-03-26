export function MoviCard(props) {
    const {name, onFavouriteClick, isFavourite} = props;

    const handleClick = () => {
        onFavouriteClick(name);
      };

    return <li>
        <article>
            <h3>{name}</h3>
            <button onClick={handleClick}>{isFavourite ? "❤️" : "♡"}</button>
        </article>
    </li>
}


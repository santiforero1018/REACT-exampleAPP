export function MoviCard(props) {
    const {name, onCheckTime} = props;

    function handleClick(){
        console.log("Time for the movie: "+ name );
        onCheckTime(name);
    }

    return <li>
        <article>
            <h3>{name}</h3>
            <button onClick={handleClick}>Horarios</button>
        </article>
    </li>
}


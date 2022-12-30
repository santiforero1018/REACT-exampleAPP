import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie-list">Movie List</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}

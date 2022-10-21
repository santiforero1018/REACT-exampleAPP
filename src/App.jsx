import Header from "./components/Header";
import { MovieList } from "./components/MovieList";

const latestMovies = [
  { name: "Avatar 2" },
  { name: "Matrix 4" },
  { name: "Thor" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList list={latestMovies} />
    </div>
  );
}

export default App;

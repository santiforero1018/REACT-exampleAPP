import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { AboutUsPage } from "./pages/AboutUsPage";
import { HomePage } from "./pages/HomePage";
import { MovieDetailPage } from "./pages/MovieDetailPage";
import { MovieListPage } from "./pages/MovieListPage";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/movie-list" element={<MovieListPage />} />
        <Route path="/movie-detail/:id" element={<MovieDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

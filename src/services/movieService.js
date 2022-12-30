const movies = [
  {
    id: "1",
    name: "Matrix 4",
    type: "3d",
    times: ["11:00", "14:00", "18:30"],
    poster:
      "https://assets.cdn.moviepilot.de/files/45b6248e1ba6bcd1c00eafb763b8b8ea55f26c6bb7b0e11a93fc721619c6/limit/360/240/matrix-resurrections-poster.jpg",
  },
  {
    id: "2",
    name: "Matrix 4",
    type: "2d",
    times: ["10:30", "12:00", "14:00"],
    poster:
      "https://assets.cdn.moviepilot.de/files/45b6248e1ba6bcd1c00eafb763b8b8ea55f26c6bb7b0e11a93fc721619c6/limit/360/240/matrix-resurrections-poster.jpg",
  },
  {
    id: "3",
    name: "Avatar 2",
    type: "3d",
    times: ["8:30", "15:00", "20:00"],
    poster:
      "https://de.web.img3.acsta.net/r_1280_720/pictures/22/11/04/08/13/1380149.jpg",
  },
  {
    id: "4",
    name: "Avatar 2",
    type: "2d",
    times: ["10:30", "11:00", "17:00"],
    poster:
      "https://de.web.img3.acsta.net/r_1280_720/pictures/22/11/04/08/13/1380149.jpg",
  },
];

export function getMovies(filter) {
  if (filter?.type) {
    return Promise.resolve(
      movies.filter((movie) => movie.type === filter.type)
    );
  }

  return Promise.resolve(movies);
}

export function getMovieById(movieId) {
  return Promise.resolve(movies.find((movie) => movie.id === movieId));
}

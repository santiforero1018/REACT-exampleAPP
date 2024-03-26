import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import { Ml } from './components/movieList'

const movies = [{name: "Avatar"}, {name: "Star Wars"}, {name: "Asperus"} ];

function App() {
  return (
    <div className="App">
      <Header />
      <Ml list={movies}/>
    </div>
  )
}

export default App

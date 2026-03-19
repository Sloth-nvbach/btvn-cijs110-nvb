import React from "react";
import Navbar from './components/Navbar/Navbar';
import Text from './components/Text/Text';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';

import { moviesData } from "../src/data/data.js";;

function App() {
  const featuedMovie = moviesData.find(movie => movie.id === "1");
  const lastestRelease = moviesData.find(movie => movie.id !== "1");

  return (
    <div style={{
      backgroundColor: "#192026",
      minHeight: "100vh",
      fontFamily: "Poppins, sans-serif",
      padding: "15px 83px"
    }}>

      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <Text color="#FFFFFF" fontSize="32px" fontWeight="bold">Explore</Text>
      <Text color="#868686" fontSize="22px" fontWeight="normal">What are you gonna watch today ?</Text>

      {featuedMovie && (
        <Carousel
          image={featuedMovie.image}
          movieName={featuedMovie.movieName}
          description={featuedMovie.description} />
      )}

      {/* Cards */}
      <div>
        <Text>New Release</Text>
        <div style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
          width: "100%",
          flexWrap: "wrap"
        }}>
          {lastestRelease.map((movie) => (
            <Card
              key={movie.id}
              image={movie.image}
              movieName={movie.movieName}
              episode={movie.episode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
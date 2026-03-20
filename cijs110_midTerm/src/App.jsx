import React, { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Text from './components/Text/Text';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';

import { moviesData } from "../src/data/data.js";;

function App() {
  const [activeMovie, setActiveMovie] = useState(moviesData.find(movie => movie.id === "1"))
  const latestRelease = moviesData.filter(movie => movie.id !== "1");
  const bannerImage = activeMovie ? activeMovie.image.replace("../assets/images/", "/images/") : "";

  return (
    <div style={{
      backgroundColor: "#192026",
      minHeight: "100vh",
      fontFamily: "Poppins, sans-serif",
      padding: "15px 83px",
      maxWidth: "1340px",
      margin: "0 auto",
      boxSizing: "border-box"
    }}>

      {/* Navbar */}
      <Navbar />



      {/* Body */}
      <Text color="#FFFFFF" fontSize="32px" fontWeight="600" style={{ lineHeight: "112.5%" }}>Explore</Text>
      <Text color="#868686" fontSize="22px" fontWeight="400" style={{ lineHeight: "112.5%", marginTop: "8px" }}>What are you gonna watch today ?</Text>

      {activeMovie && (
        <Carousel
          image={bannerImage}
          movieName={activeMovie.movieName}
          description={activeMovie.description}
        />
      )}



      {/* Cards */}
      <div style={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}>
        <Text color="#FFFFFF" fontSize={"36px"} fontWeight="600" style={{ lineHeight: "32px" }}>New Release</Text>


        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          width: "100%",
          flexWrap: "wrap"
        }}>
          {latestRelease .map((movie) => {
            const cleanImagePath = movie.image.replace("../assets/images/", "/images/");

            return (
              <Card
                key={movie.id}
                image={cleanImagePath}
                movieName={movie.movieName}
                episode={movie.episode}

                onclick={() => setActiveMovie(movie)}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
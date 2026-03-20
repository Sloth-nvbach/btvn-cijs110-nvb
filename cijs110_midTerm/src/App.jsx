import React from "react";
import Navbar from './components/Navbar/Navbar';
import Text from './components/Text/Text';
import Carousel from './components/Carousel/Carousel';
import Card from './components/Card/Card';

import { moviesData } from "../src/data/data.js";;

function App() {
  const featuedMovie = moviesData.find(movie => movie.id === "1");
  const lastestRelease = moviesData.filter(movie => movie.id !== "1");
  const bannerImage = featuedMovie ? featuedMovie.image.replace("../assets/images/", "/images/") : "";

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
      <Text color="#FFFFFF" fontSize="32px" fontWeight="600" style={{ lineHeight: "112.5%" }}>Explore</Text>
      <Text color="#868686" fontSize="22px" fontWeight="400" style={{ lineHeight: "112.5%", marginTop: "8px" }}>What are you gonna watch today ?</Text>

      {featuedMovie && (
        <Carousel
          image={bannerImage}
          movieName={featuedMovie.movieName}
          description={featuedMovie.description} />
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
          {lastestRelease.map((movie) => {
            const cleanImagePath = movie.image.replace("../assets/images/", "/images/");

            return (
              <Card
                key={movie.id}
                image={cleanImagePath}
                movieName={movie.movieName}
                episode={movie.episode}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
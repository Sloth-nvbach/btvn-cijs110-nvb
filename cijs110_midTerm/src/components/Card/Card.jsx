import React from "react";
import "./Card.css";
const Card = ({image, movieName, episode}) => {
    return (
        <div className="movie-card">
            <div className="movie-container">
                <img src={image} alt={movieName} className="movie-poster"/>
                <div className="movie-blur"></div>
                <div className="card-contents">
                    <h3 className="movie-name">{movieName}</h3>
                    <p className="episode-info">Episode {episode}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
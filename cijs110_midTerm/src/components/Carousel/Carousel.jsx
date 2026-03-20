import React from "react";
import "./Carousel.css";

const Carousel = ({ image, movieName, description }) => {
    return (
        <div className="carousel-container">
            <img src={image} alt="" className="carousel-img" />
            <div className="carousel-overlay"></div>
            <div className="carousel-content">
                <h1 className="carousel-title">{movieName}</h1>
                <p className="carousel-description">{description}</p>
            </div>
        </div>
    )
}

export default Carousel;
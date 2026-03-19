import React from "react";
import "./Carousel.css";

const Carousel = ({image, movieName, description}) => {
    return (
        <div className="carousel-container">
            <img src={image} alt="" className="carousel-img"/>
            <div className="carousel-overlay"></div>
            <div className="carousel-content">
                <p className="title">{movieName}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    )
}

export default Carousel;
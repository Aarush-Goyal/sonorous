import React from "react";

const CarouselItem = (props) => (
  <div className={`carousel-item ${props.active}`}>
    <img
      className="d-block w-100"
      src={props.imageURL}
      alt={props.altImgText}
    />
    <div className="carousel-caption d-none d-md-block">
      <h5>{props.titleCarousel}</h5>
      <p>{props.pCarousel}</p>
    </div>
  </div>
);

export default CarouselItem;

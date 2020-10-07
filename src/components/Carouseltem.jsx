import React from "react";

const CarouselItem = (props) => (
  <div className={`carousel-item ${props.active}`}>
    <img
      className="d-block w-100"
      src={props.imageURL}
      alt={props.altImgText}
    />
  </div>
);

export default CarouselItem;

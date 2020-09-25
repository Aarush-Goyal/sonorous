import React from "react";
import "./css/HeroSection.css";
import CarouselItem from "./Carouseltem";
const HeroSection = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <CarouselItem
          active="active"
          imageURL="https://source.unsplash.com/random"
          altImgText="image-2"
          titleCarousel="first slide"
          pCarousel="lorem ipsum"
        />
        <CarouselItem
          imageURL="https://source.unsplash.com/random"
          altImgText="image-2"
          titleCarousel="second slide"
          pCarousel="lorem ipsum"
        />
        <CarouselItem
          imageURL="https://source.unsplash.com/random"
          altImgText="image-2"
          titleCarousel="third slide"
          pCarousel="lorem ipsum"
        />
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HeroSection;

import React from "react";
import CarouselItem from "./Carouseltem";
import bannerImage from "../assets/banner1.jpg";
import bannerImage2 from "../assets/banner2.jpg";
const HeroSection = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      {/* <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol> */}
      <div className="carousel-inner">
        <CarouselItem
          active="active"
          imageURL={bannerImage2}
          altImgText="image-2"
          titleCarousel="first slide"
          pCarousel="lorem ipsum"
        />
        <CarouselItem
          imageURL={bannerImage}
          altImgText="image-2"
          titleCarousel="second slide"
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

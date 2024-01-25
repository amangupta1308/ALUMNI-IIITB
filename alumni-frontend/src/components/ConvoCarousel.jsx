import React from "react";
import convo1 from "../assets/convo-poster.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ConvoCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        style={{ padding: "100px" }}
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner rounded-xl">
          <div class="carousel-item active">
            <LazyLoadImage
              class="d-block w-100"
              src={convo1}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "32px" }}>Convocation 2023</h5>
              <p>Convocation for the students of batch 2020-2021</p>
            </div>
          </div>
          <div class="carousel-item">
            <LazyLoadImage
              class="d-block w-100"
              src={convo1}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "32px" }}>Convocation 2023</h5>
              <p>Convocation for the students of batch 2020-2021</p>
            </div>
          </div>
          <div class="carousel-item">
            <LazyLoadImage
              class="d-block w-100"
              src={convo1}
              alt="First slide"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 style={{ fontSize: "32px" }}>Convocation 2023</h5>
              <p>Convocation for the students of batch 2020-2021</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default ConvoCarousel;

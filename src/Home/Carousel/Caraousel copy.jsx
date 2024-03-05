import React from "react";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import "../Carousel/caraousel.css";

const url = "https://test-tod.pockethost.io/";
const client = new PocketBase(url);
client.autoCancellation(false);

const Carousel = () => {
  const [category, setCategory] = useState([]);
  const [carousel, setCaraousel] = useState([]);

  useEffect(() => {
    client
      .collection("category")
      .getFullList()
      .then((res) => {
        setCategory(res);
      });

    client
      .collection("caraousel")
      .getFullList()
      .then((res) => {
        setCaraousel(res);
      });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosX, setStartPosX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const slides = [
    { id: 1, src: "image1.jpg", alt: "Image 1" },
    { id: 2, src: "image2.jpg", alt: "Image 2" },
    { id: 3, src: "image3.jpg", alt: "Image 3" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]); // Restart interval whenever currentSlide changes

  const startDrag = (e) => {
    setIsDragging(true);
    setStartPosX(e.clientX);
    setPrevTranslate(currentTranslate);
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      carousel.style.transition = "none";
    }
  };

  const drag = (e) => {
    if (isDragging) {
      const currentPositionX = e.clientX;
      setCurrentTranslate(prevTranslate + currentPositionX - startPosX);
      const carousel = document.querySelector(".carousel");
      if (carousel) {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
      }
    }
  };

  const endDrag = () => {
    setIsDragging(false);
    const threshold = window.innerWidth / 4; // Drag threshold (25% of window width)
    if (Math.abs(currentTranslate - prevTranslate) > threshold) {
      if (currentTranslate < prevTranslate) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      carousel.style.transition = "";
      carousel.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
    setCurrentTranslate(-nextIndex * window.innerWidth);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevIndex);
    setCurrentTranslate(-prevIndex * window.innerWidth);
  };

  return (
    <div
      className="carousel-container"
      onMouseDown={startDrag}
      onMouseMove={drag}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
    >
      <div
        className="carousel"
        style={{ transform: `translateX(${currentTranslate}px)` }}
      >
        {carousel.map((car) => (
          <div
            key={car.id}
            className={`carousel-slide ${
              car.id === currentSlide + 1 ? "active" : ""
            }`}
          >
            <img
              src={
                "https://test-tod.pockethost.io/api/files/caraousel/" +
                car.id +
                "/" +
                car.image
              }
              alt=""
            />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        ←
      </button>
      <button className="next" onClick={nextSlide}>
        →
      </button>
    </div>
  );
};

export default Carousel;

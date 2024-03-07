import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./Batik.css";
import "swiper/css";
import data from "../../utils/batik.json";
import { sliderSettings } from "../../utils/common";
const Batik = () => {
  return (
    <section id="batik" className="b-wrapper">
      <div className="b-head">
        <span className="chocoText">Best Choices</span>
        <span className="primaryText">Popular Batik Indonesia</span>
      </div>
      <div className="b-container">
        <Swiper {...sliderSettings}>
        <SliderButtons/>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="b-card">
                <img src={card.images} alt="batik" />
                <span className="b-text">
                  <span className="primaryText">{card.price}</span>
                  <span className="chocoText">{card.name}</span>
                  <span>{card.detail}</span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Batik;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="b-button">
      <button className="button-slide" onClick={() => swiper.slidePrev()}>&lt;</button>
      <button className="button-slide" onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

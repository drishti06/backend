import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../data/common.json";
import "swiper/css";
import "./Swiperr.css";
import { sliderSetting } from "../../data/slider.js";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const Swiperr = () => {
  const swiper = useSwiper();
  return (
    <div className="swiperr">
      <div className="swiper-top">
        <div className="top-heading">
          <span>Old Soul;Jazz & Disco</span>
          <span>
            A crate Digger's Playground These are out Most Classic sounds that
          </span>
          <span>Represent The Golden Age of Music.</span>
        </div>
        <div className="top-content">
          <Swiper {...sliderSetting} className="swipe">
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div>
                  <div className="img">
                    <div className="dot-line"></div>
                    <img src={card.image} alt={card.alt} />
                  </div>
                </div>
                <div className="image-content">
                  <span className="">{card.songName}</span>
                  <span className="">{card.genre}</span>
                  <span className="">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
            <SliderButtons />
          </Swiper>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Swiperr;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-bottom">
      <BsArrowLeftCircle
     
        onClick={() => swiper.slidePrev()}
      />
      <BsArrowRightCircle
    
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};

import React from "react";
import "./Home.css";
import headphone from "../../images/headphone-dynamic-premium.png";
import img1 from "../../images/img1.png";
import img2 from "../../images/img-2.png";
import { LuSearch } from "react-icons/lu";
import Sample from "../../components/Samples/Sample";
import Slogan from "../../components/Slogan/Slogan";
import Swiperr from "../../components/Swiper/Swiperr";
import Trial from "../../components/Trial/Trial";
import MiniNav from "../../components/MiniNav/MiniNav";
import Features from "../../components/Features/Features";
import { Link } from "react-router-dom";


const Home = () => {
  const isHomePage = true;
  return (
    <>
      <div className="home">
        <MiniNav isRedVersion={isHomePage} />
        <div className="home-top">
          <div className="home-left">
            <img src={headphone} alt="" />
          </div>
          <div className="home-center">
            <div className="title">
              <div className="heading">
                <h1>
                  The World's Best <br /> Sample Library
                </h1>
              </div>
              <div className="title-button">
                <button>
                  <Link to="/pricing" className="pricing">
                    Try free for 14 days
                  </Link>
                </button>
              </div>
            </div>
            <div className="title-search">
              <input type="text" placeholder="Search any sounds" />
              <LuSearch />
            </div>
          </div>
          <div className="home-right">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="home-between">
          <div className="genres">
            <span>Browse genres</span>
            <div className="genre-type">
              <div>
                <span className="genre">EDM</span>
                <span className="genre">trap</span>
                <span className="genre">drum & bass</span>
                <span className="genre">R&B</span>
                <span className="genre">tech house</span>
                <span className="genre">Hip Hop</span>
              </div>
              <div>
                <span className="genre">Soul</span>
                <span className="genre">Disco</span>
                <span className="genre">Lofi</span>
                <span className="genre">Techno</span>
                <span className="genre">Tropical</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <Features />
        </div>
      </div>
      <Sample />
      <Slogan />
      <Swiperr />
      <Trial />
    </>
  );
};

export default Home;

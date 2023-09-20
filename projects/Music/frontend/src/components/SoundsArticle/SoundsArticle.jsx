import React from "react";
import "./SoundsArticle.css";
import { Link } from "react-router-dom";

const SoundsArticle = () => {
  return (
    <article className="article">
      <div>
        <span>
          <Link to="/soundsChart" className="article-btn">
            All Over
          </Link>
        </span>
        <br />
        <span>
          <Link to="/ibrary" className="article-btn">
            Your Library
          </Link>
        </span>
        <br />
        <span>
          <Link to="/mySounds" className="article-btn">
            Your Sounds
          </Link>
        </span>
        <br />
        <span>
          <Link to='/soundAudioForm' className="article-btn audio-btn">Add audio</Link>
        </span>
      </div>
    </article>
  );
};

export default SoundsArticle;

import { React, useEffect, useState } from "react";
import "./Sounds.css";
import MiniNav from "../../components/MiniNav/MiniNav";
import SoundsImageSection from "../../components/SoundsImageSection/SoundsImageSection";
import SoundsArticle from "../../components/SoundsArticle/SoundsArticle";
import { Link } from "react-router-dom";
import SoundsChart from "../../components/SoundsChart/SoundsChart";


const Sounds = () => {
  const isHomePage = false;


  const getProducts = async () => {
    const res = await axios.get('http://localhost:8080/abc')
    console.log(res)
  }
  return (
    <>
      <MiniNav isRedVersion={isHomePage} />
      <div className="sounds">
        <SoundsArticle />
        <hr />
        <div>
          <SoundsImageSection></SoundsImageSection>
          <hr />
          <SoundsChart></SoundsChart>
        </div>
      </div>
    </>
  );
};

export default Sounds;

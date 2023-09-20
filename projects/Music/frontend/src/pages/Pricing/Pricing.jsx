import React from "react";
import "./Pricing.css";
import MiniNav from "../../components/MiniNav/MiniNav";
import PricingCard from "../../components/PricingCard/PricingCard";
import HowCompanyWorks from "../../components/HowCompanyWorks/HowCompanyWorks";
import Sample from "../../components/Samples/Sample";
import InsipirationGenresPricing from "../../components/InsipirationGenresPricing/InsipirationGenresPricing";
import Features from "../../components/Features/Features";

const Pricing = () => {
  const isHomePage = true;
  return (
    <section className="startTrial">
      <MiniNav isRedVersion={isHomePage} />
      <PricingCard />
      <HowCompanyWorks />
      <Sample />
      <InsipirationGenresPricing />
      <div className="feature-center">
        <Features />
      </div>
    </section>
  );
};

export default Pricing;

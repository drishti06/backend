import React from "react";
import "./PricingCard.css";
import { plansData } from "../../data/plansData.js";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const PricingCard = () => {
  return (
    <>
      <div className="pricing-card">
        <h1>
          Start your free 14-day trial. <br />
          Cancel any time.
        </h1>
        <div className="month-year">
          <div>
            <span>Monthly</span>
            <span>Annual</span>
          </div>
          <span>2 months free</span>
        </div>
        <div className="card">
          {plansData.map((plan, i) => (
            <div className="plans">
              <span>{plan.name}</span>
              <span>
                <span className="price">{plan.price} </span> /monthly
              </span>
              <button className="card-btn">
                <a href="$">Get Started Now</a>
              </button>
              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature">
                    <AiFillCheckCircle style={{ fontSize: "24px" }} />
                    <span>{feature} </span>
                  </div>
                ))}
                <div className="feature">
                  <AiFillCloseCircle style={{ fontSize: "24px" }} />
                  <span>{plan.notFeature}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pricing-card-btn">
          <button>
            <a href="$">Start a free trial</a>
          </button>
        </div>
        <span className="cancel">Cancel at any time</span>
      </div>
    </>
  );
};

export default PricingCard;

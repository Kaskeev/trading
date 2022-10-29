import React from "react";
import styles from "../Main/Main.css";
import math from "../../assets/math.png";
import ellipse from "../../assets/ellipse.png";

const Main = () => {
  return (
    <div className="main container" id="main">
      <div className="ellipse-main"></div>
      <div className="main__left">
        <div className="ellipse-main2"></div>
        <div className="main__left-bottom card__block ">
          <div className="main__left-img">
            <img src={math} alt="" />
          </div>
          <div className="main__left-content">
            <h3 className="main__left-title">Spot & Margin</h3>
            <p className="main__left-text">
              Trade <span>200+</span> pairs with up to 10x leverage
            </p>
          </div>
          <button className="main__btn main__btn-form">Learn More</button>{" "}
        </div>
      </div>
      <div className="main__right">
        <div className="main__right-top">
          <div className="main__top-blocks">
            <div className="card__blocks">
              <div className="main__top-block card__block-hover">
                <h4 className="main__top-title">Derivatives</h4>
                <p className="main__top-text">
                  40+ quarterly futures and contracts
                </p>
                <button className="main__btn ">Learn More</button>
              </div>
            </div>
            <div className="card__blocks">
              <div className="main__top-block card__block-hover">
                <h4 className="main__top-title">Trading Arena</h4>
                <p className="main__top-text">Prize pools worth up to</p>
                <button className="main__btn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="main__right-bottom">
          <div className="main__top-block main__bottom-block card__block-hover">
            <div className="main__bottom-first ">
              <h4 className="main__top-title">mobile app</h4>
              <p className="main__top-text main__bottom-text">
                Trade anytime, anywhere
              </p>
              <button className="main__btn">Learn More</button>
            </div>
            <div className="main__bottom-img">
              <img src={ellipse} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

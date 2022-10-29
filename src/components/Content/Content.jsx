import React from "react";
import styles from "../Content/Content.css";
import { Link, animateScroll as scroll } from "react-scroll";
import chart from "../../assets/Chart.png";
import arrowBlue from "../../assets/arrow-blue.svg";
import arrowPink from "../../assets/arrow-pink.svg";
import wrapperLogo from "../../assets/wrapper-img.png";

const Content = () => {
  return (
    <div className="content" id="content">
      <Link
        activeClass="active"
        to="main"
        spy={true}
        smooth={true}
        offset={30}
        duration={1000}
      >
        <div className="scroll-down"></div>
      </Link>

      <div className="gradient-left"></div>
      <div className="container">
        <h2 className="content__title">about us</h2>
        <p className="content__text">Global technologies</p>
        <div className="content__gradient-r"></div>
        <div className="content__block">
          <div className="content__block-l" data-aos={"fade-right"}>
            <img src={chart} />
          </div>
          <div className="content__block-r" data-aos={"fade-left"}>
            <h5 className="content__r-title">Level 1</h5>
            <div className="content__r-wrapper">
              <img src={arrowBlue} alt="" />
              <p className="content__wrapper-text">
                Deploy a multi-legged futures strategy by simultaneously placing
                orders to buy and sell from the same order ticket.
              </p>
            </div>
            <div className="content__r-wrapper">
              <img src={arrowPink} alt="" />
              <p className="content__wrapper-text">
                Deploy a multi-legged futures strategy by simultaneously placing
                orders to buy and sell from the same order ticket.
              </p>
            </div>
            <button className="coolBeans">Start Now</button>
          </div>
        </div>
      </div>
      <div className="wrapper__block">
        <div className="wrapper__block-l" data-aos={"fade-right"}>
          <div className="wrapper__l-first">
            <button className="wrapper__first-form wrapper-self">
              Artificial Intelligence
            </button>
            <div className="line" id="line1"></div>
            <button className="wrapper__first-form wrapper-self2">
              Storage Networks
            </button>
            <div className="line" id="line2"></div>
            <button className="wrapper__first-form  wrapper__form">
              P2P Networks
            </button>
            <div className="line" id="line3"></div>
          </div>
          <div className="wrapper__l-second">
            <div className="line" id="line4"></div>
            <div className="line" id="line5"></div>
            <div className="line" id="line6"></div>
            <div className="line" id="line7"></div>
            <div id="line8"></div>
            <button className="wrapper__first-form">Public Data</button>
            <button className="wrapper__first-form wrapper__form-block">
              Encrypted Private Data *
            </button>
          </div>
          <div className="wrapper__l-third wrapper__l-first">
            <img className="wrapper__logo" src={wrapperLogo} alt="" />.
            <p className="wrapper__text">
              Easy to use digital service and exclusive personal service for our
              active traders
            </p>
            <div className="wrapper__first-mobile">
              <button className="wrapper__first-form">Indexing</button>
              <button className="wrapper__first-form">API</button>
            </div>
            <div id="wrapper">
              <div id="wrapper-inner">
                <div id="scroll-down">
                  <span class="arrow-down"></span>
                </div>
                <div id="scroll-up">
                  <span class="arrow-up"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper__block-r" data-aos={"fade-left"}>
          <p className="wrapper__right-text">
            The future <span>of</span> Cryptocurrency trading{" "}
            <span>platform</span>
          </p>
          <p className="wrapper__text-bottom">
            Take advantage of time and sales, futures spread orders and depth
            trader — plus, trade directly from charts.
          </p>
          <button className="learnMore">Learn more</button>
        </div>
        <div className="ellipse"></div>
      </div>
    </div>
  );
};

export default Content;

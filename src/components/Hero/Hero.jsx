import React from 'react';
import CalendarBtn from './CalendarBtn';
// import HeroBackground from './HeroBackground';

const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      {/*<HeroBackground className="hero__background" />*/}

      <div className="hero__information">
        <div className="hero__wrapper--content">
          <div className="hero__item">
            <p className="hero__item--title">
              Total amount
            </p>

            <p className="hero__item--text">
              2,000
            </p>
          </div>

          <div className="hero__item">
            <p className="hero__item--title">
              Price
            </p>

            <p className="hero__item--text">
              10 Ⓝ
            </p>
          </div>
        </div>

        <p className="hero__text">18/12/2021 @ 15:00 UTC</p>
        <h1 className="hero__title">
          NEAR Tiger <br /> Academy
        </h1>
        <p className="hero__text--point">
          <span>A high-class collection of 2000 algorithmically generated NFTs on NEAR Protocol.<br />
          The Academy resides in Los Tigres, a city full of opportunities, its citizens are eligible for the following:</span>
        </p>
        <p className="hero__text--point">1) >100 traits for PFP</p>
        <p className="hero__text--point">2) Investment in promising student researchers</p>
        <p className="hero__text--point">3) Membership in the EnDAOment Fund</p>
        <p className="hero__text--point">4) Lotteries</p>
        <p className="hero__text--point">5) Special conditions on future projects</p>
        
        <p className="hero__text--select">Select the amount of NEAR Tigers you'd like to mint and click the «Mint».</p>
        <div className="hero__wrapper">
          <input type="number" className="hero__input" />

          <CalendarBtn className="hero__calendar-btn" />
        </div>

        <picture>
          <source srcSet="./images/hero2.png" />
          <img
            className="hero__image"
            src="./images/hero2.png"
            alt="hello super"
          />
        </picture>
      </div>
    </div>
  </div>
);

export default Hero;

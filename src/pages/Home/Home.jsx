// eslint-disable-next-line no-unused-vars
import React from "react";
import Profile from "../../assets/home.png";
import Background from "../../assets/back2-01.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          
          <h1 className="home__title">
            <span>I'm Charitha Weerasekara</span>
            <br/>
            UI/UX Enginer
          </h1>
          <p className="home__description">
          I am a multidisciplinary creative, blending UX/UI design, frontend development, and graphic design into a seamless digital experience. With a strong eye for detail and a passion for user-centric design. My graphic design skills add a touch of storytelling to every project. Welcome to my portfolio, where art and technology converge to create captivating digital journeys.
          </p>

          <Link to="/about" className="button">
            More About Me {' '}
            <span className="button__icon">
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;

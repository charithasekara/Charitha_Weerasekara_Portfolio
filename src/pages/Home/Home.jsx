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
            <span>  I'm Charitha  </span>
            UI UX designer
          </h1>
          <p className="home__description">
          I am a multidisciplinary creative, blending UX/UI design, frontend development, and graphic design into a seamless digital experience. With a strong eye for detail and a passion for user-centric design, I craft intuitive interfaces that come to life with pixel-perfect development. My graphic design skills add a touch of storytelling to every project. Welcome to my portfolio, where art and technology converge to create captivating digital journeys. Let's collaborate to turn your ideas into remarkable digital realities.
          </p>

          <Link to="/about">
            <button class="signupBtn">
                More About Me
              <span class="arrow">
                <svg
                  fill="rgb(183, 128, 255)"
                  viewBox="0 0 320 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Home;

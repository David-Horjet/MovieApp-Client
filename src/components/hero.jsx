import React from "react";
import "../assets/css/hero.css";
import { IoCalendar } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import Header from "./header";

function Hero() {
  return (
    <section id="hero">
      <Header />
      <div className="hero-content">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <span className="film">FilmRoom</span>
              <h2>
                Unlimited <span>Movies,</span> <br /> TVs Shows, & More.
              </h2>
              <div>
                <ul>
                  <li class="quality">
                    <span>18+</span>
                    <span>hd</span>
                  </li>
                  <li class="category">
                    <a href="/#">Romance, </a>
                    <a href="/#">Drama</a>
                  </li>
                  <li class="release-time">
                    <span>
                      <IoCalendar className="calendar" /> 2022
                    </span>
                    <span>
                      <FaRegClock className="clock" /> 128 min
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

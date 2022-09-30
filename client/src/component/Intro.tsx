import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-main">
      <div className="intro-container">
        <div className="intro-text">
          <div className="p text-1">
            <p>
              Hi, <span>🖐🏽</span> I'm
            </p>
          </div>
          <div className="text-2">
            <h2> Nnaji Chimuanya </h2>
          </div>
          <div className="p">
            <div className="text-3">
              <p> A FullStack developer and Backend specialist, </p>
              <p> who's intrested in building real-world solutions </p>
            </div>
          </div>
        </div>
        <div className="p intro-image">
          <img
            src="https://pbs.twimg.com/profile_images/1521238952698601475/qIg6IES6_400x400.jpg"
            alt="muanya"
            className="muanya"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;

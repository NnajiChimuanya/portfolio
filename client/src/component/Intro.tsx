import React from "react";
import "./intro.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    // I used align-self to make the image centred
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
          <div className="p text-3">
            <div>
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
      <div className="button-container">
        <Button variant="outlined" fullWidth className="portfolio-button">
          <Link className="portfolio-link" to={"/portfolio"}>
            Go to portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Intro;

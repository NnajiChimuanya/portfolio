import React, { useState } from "react";
import "./experience.css";
import { jobs } from "../dummyData";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Experience = () => {
  const [value, setValue] = useState(0);
  const { company, dates, duties, title, tools } = jobs[value];

  return (
    <div className="experience-main">
      <div className="experience-container">
        <div className="titleDiv">Experience</div>

        <div className="job">
          <div className="btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`jobButton ${index === value && "activeButton"}`}
                >
                  {" "}
                  {job.company}{" "}
                </button>
              );
            })}
          </div>

          <div className="details">
            <h2>{title}</h2>
            <h3>{company}</h3>
            <div className="tools">
              {tools?.map((tool, index) => {
                return <h4 key={index}>{tool}</h4>;
              })}
            </div>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="duty">
                  <KeyboardDoubleArrowRightIcon className="arrow" />{" "}
                  <p>{duty}</p>
                </div>
              );
            })}

            <div className="more">
              <button>More Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

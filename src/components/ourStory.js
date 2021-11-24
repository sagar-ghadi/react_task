import React from "react";
import OurStoryImg from "../assets/img/our_story.png";
import content from "../assets/img/content.png";

const OurStory = () => {
  return (
    <>
      <div className="container">
        <div className="pad-y-5">
          <div className="row">
            <div class="col-12 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">
              <h1 className="fw-bold">Our Story</h1>
            </div>
            <div class="col-12 col-md-8 col-lg-7 d-flex align-items-center justify-content-center">
              <p className="fs-24 text-start">
                Melissa Bentivoglio and Lee Belzberg have paired together their
                extensive backgrounds of elite fitness instruction and
                entrepreneurship to bring you Frame—a groundbreaking approach to
                pilates disrupting the traditional at-home fitness market.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative d-none d-md-block d-lg-block d-xl-block">
        <img src={OurStoryImg} className="img-h-w" alt="ourStoryImg" />
        <img src={content} className="content-box" alt="content" />
      </div>
      <div className="col-12 d-block d-md-none d-lg-none d-xl-none">
        <img src={OurStoryImg} className="img-h-w" alt="ourStoryImg" />
        <img src={content} alt="content" className="img-h-w" />
      </div>
    </>
  );
};
export default OurStory;

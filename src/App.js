import "./App.css";
import Navbar1 from "./components/navbar";
import OurStory from "./components/ourStory";
import ContentBox from "./components/contentBox";
import { Button } from "react-bootstrap";
import fb from "./assets/img/fb.png";
import insta from "./assets/img/insta.png";
import twitter from "./assets/img/twitter.png";
import facebook_filled from "./assets/img/facebook_filled.png";
import instagram_filled from "./assets/img/instagram_filled.png";
import twitter_filled from "./assets/img/twitter_filled.png";
import footerLogo from "./assets/img/footer-logo.png";

function App() {
  return (
    <div className="App">
      <>
        <Navbar1 />
        <OurStory />
        <>
          <div className="pad-5">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <ContentBox
                  contentTitle="Mark Mastrov Investor, Board of Director"
                  contentDesc="Mark Mastrov is an American businessman who was born in Oakland, CA. In addition to serving on the board and investing in Frame, he is the founder and former CEO of 24-Hour Fitness as well as many other fitness ventures worldwide. Mastrov is also a member of the Sacramento Kings ownership group."
                />
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <ContentBox
                  contentTitle="Michael Bruno Investor "
                  contentDesc="Michael Bruno is the owner and CEO of Core Health and Fitness. Core Health & Fitness is the world’s largest privately-held marketer and distributor of commercial fitness solutions to health clubs, community recreational centers, hotels, government, educational facilities and more."
                />
              </div>
            </div>
          </div>
        </>
        <>
          <div className="d-flex  flex-column align-items-center justify-content-center bg-gradients">
            <p className="fs-40 fw-bold">GET MOVING</p>
            <Button variant="primary" className="rounded-0 px-5 ms-3 d-block">
              SHOP NOW
            </Button>
          </div>
        </>
        <>
          <div className="footer-pad bg-dark text-white">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <div>
                  <h6>Contact</h6>
                  <p>info@framefitness.com</p>
                  <address>
                    Frame Innovative Technologies Corp. 265 S. Western Avenue
                    P.O. Box #741940 Los Angeles, CA 90004-9998
                  </address>
                  <img src={fb} alt="facebook" className="me-4" />
                  <img src={twitter} alt="twitter" className="me-4" />
                  <img src={insta} alt="instagram" className="me-4" />
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-6 h-100">
                <div className="d-flex justify-content-start justify-content-md-center justify-content-lg-center my-5 my-md-0 my-lg-0">
                  <img src={footerLogo} alt="brandLogo" />
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3 d-flex align-items-end h-100">
                <div className="">
                  <p>Terms and Conditions</p>
                  <p>©Copyright 2021 Frame is patent pending</p>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="sticky-social">
            <ul className="social mb-0">
              <li className="fb">
                <a href="#">
                  <img src={facebook_filled} alt="facebook" className="icon" />
                </a>
              </li>
              <li className="twitter">
                <a href="#">
                  <img src={instagram_filled} alt="twitter" className="icon" />
                </a>
              </li>
              <li className="insta">
                <a href="#">
                  <img src={twitter_filled} alt="instagram" className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </>
        <>
          <div className="sticky-motion-content">
            <ul className="social mb-0">
              <li>FRAME</li>
              <li>MADE FOR MOTION</li>
            </ul>
          </div>
        </>
      </>
    </div>
  );
}

export default App;

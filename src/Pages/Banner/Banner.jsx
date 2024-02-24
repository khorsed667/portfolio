import "./Banner.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="b-wrapper max-w-screen-xl mx-auto">
      <div className="container-width paddings b-container flex justify-between items-center w-full">
        <div className="left-container mt-10">
          <div className="b-heading ">
            <span className="blackHeadingText text-heading">
              Junior MERN Stack <br /> Developer
            </span>
          </div>
          <div className="b-intro">
            <span className="primaryText intro">
              I am Khorsed Alam, A junior MERN Stack developer from Jessore,
              Bangladesh. <br />
            </span>
          </div>
          <div className="social flex flex-row py-5">
            <a href="https://github.com/khorsed667">
              <button>
                <FaGithub></FaGithub>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/khorsed-alam-18b9b5280/">
              <button>
                <FaLinkedin></FaLinkedin>
              </button>
            </a>
            <a href="https://www.facebook.com/jaljalalioal.ekram?mibextid=ZbWKwL">
              <button>
                <FaFacebook></FaFacebook>
              </button>
            </a>
          </div>
        </div>
        <div className="right-container">
          <div>
            <img src="./profile-pic.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

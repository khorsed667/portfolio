import "./Banner.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="b-wrapper">
      <div className="container-width paddings b-container flex justify-between w-full">
        <div className="left-container mt-10">
          <div className="b-heading ">
            <span className="blackHeadingText text-heading">
              MERN Stack <br /> Developer
            </span>
          </div>
          <div className="b-intro">
            <span className="primaryText intro">
              I am Khorsed Alam, A junior MERN stack developer from Jessore,
              Bangladesh. <br />
            </span>
          </div>
          <div className="social flex flex-row py-5">
            <button>
              <FaGithub></FaGithub>
            </button>
            <button>
              <FaLinkedin></FaLinkedin>
            </button>
            <button>
              <FaFacebook></FaFacebook>
            </button>
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

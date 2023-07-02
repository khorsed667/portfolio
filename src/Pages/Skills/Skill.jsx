import {
  FaBootstrap,
  FaChrome,
  FaCss3,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import {
    TbBrandVscode
} from "react-icons/tb";
import {
  SiExpress,
  SiFigma,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiVercel
} from "react-icons/si";
import "./Skill.css";

const Skill = () => {
  return (
    <section className="s-wrapper paddings my-5 container-width">
      <div className="s-container flex flex-col justify-center items-center">
        <span className="blackText my-3">My Skills</span>
        <div className="skills">
          <div className="skill">
            <FaHtml5></FaHtml5>
            <p>HTML</p>
          </div>
          <div className="skill">
            <FaCss3></FaCss3>
            <p>CSS</p>
          </div>
          <div className="skill">
            <FaBootstrap></FaBootstrap>
            <p>Bootstrap</p>
          </div>
          <div className="skill">
            <SiTailwindcss></SiTailwindcss>
            <p>TailwindCSS</p>
          </div>
          <div className="skill">
            <SiJavascript></SiJavascript>
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FaReact></FaReact>
            <p>React</p>
          </div>
          <div className="skill">
            <SiExpress></SiExpress>
            <p>Express.js</p>
          </div>
          <div className="skill">
            <SiMongodb></SiMongodb>
            <p>MongoDB</p>
          </div>
          <div className="skill">
            <SiNodedotjs></SiNodedotjs>
            <p>Node.js</p>
          </div>
          <div className="skill">
            <SiFigma></SiFigma>
            <p>Figma</p>
          </div>
          <div className="skill">
            <FaChrome></FaChrome>
            <p>Chrome Dev</p>
          </div>
          <div className="skill">
            <SiVercel></SiVercel>
            <p>Vercel</p>
          </div>
          <div className="skill">
            <TbBrandVscode></TbBrandVscode>
            <p>Vs Code</p>
          </div>
          <div className="skill">
            <SiFirebase></SiFirebase>
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;

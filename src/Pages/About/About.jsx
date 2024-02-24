import './About.css'

const About = () => {
  return (
    <section id='about' className="a-wrapper my-5 max-w-screen-xl mx-auto">
      <div className="a-container paddings container-width">
        <div className="about-left">
          <img className="w-full" src="./about.jpg" alt="" />
        </div>
        <div className="about-right">
          <span className="blackText">About Me</span> <br /><br />
          <span className="primaryText text-justify">
            I'm a junior MERN stack developer actively seeking remote
            opportunities. With a strong foundation in HTML, CSS, JavaScript,
            and the MERN stack, I bring innovative solutions and a commitment to
            continuous learning. I have hands-on experience building modern
            website with a beautiful user interface and smooth user experience.
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;

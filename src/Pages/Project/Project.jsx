import "./project.css";

const Project = () => {
  return (
    <section id="projects" className="p-wrapper my-5 max-w-screen-xl mx-auto">
      <div className="p-container paddings container-width">
        <span className="blackText">My Projects</span>
        <p className="orangeText">
          Discover a showcase of my Innovative Projects.
        </p>
        <div className="single-p second-project">
          <div className="project-text">
            <div className="flex flex-col">
              <span className="my-4 blackText">Focus Haven</span>
              <p className="primaryText">
                Focus Haven is a website designed for a summer camp school
                specializing in photography training. It features three
                different dashboards for students, instructors, and
                administrators. It allows students to enroll in classes, view
                enrolled courses, and manage payments. Instructors can add and
                manage their classes, while Admin oversee class approvals and
                user roles. Built with modern technologies like React, Vite,
                Firebase, and Tailwind CSS. The project also includes user
                authentication, social login, and a responsive design.
              </p>
              <div className="project-links py-4 orangeText flex justify-around">
                <a
                  className=" hover:text-black"
                  href="https://focus-haven-1.onrender.com"
                >
                  Live Link
                </a>
                <a
                  className=" hover:text-black"
                  href="https://github.com/khorsed667/Focus-Haven.git"
                >
                  GitHub (Client)
                </a>
                <a
                  className=" hover:text-black"
                  href="https://github.com/khorsed667/Focus-Haven-Server.git"
                >
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>
          <div className="second-project-img"></div>
        </div>
        <hr className="my-5" />
        <div className="single-p">
          <div className="first-project-img"></div>
          <div className="project-text">
            <div className="flex flex-col">
              <span className="my-4 blackText">Bistro Boss</span>
              <p className="primaryText">
                I've develop Bistro Boss for simplifies the online ordering
                process for both customers and restaurant staff by using React
                for frontend and MongoDB/Express.js for backend. Where React
                Hook Form and React Ten Stack Query managed data efficiently.
                Tailwind CSS and DeisyUI provided a sleek look. Stripe ensures
                secure online payments, and Firebase handles user
                login/authentication and so on... Also an admin is associated to
                control this site.
              </p>
              <div className="project-links py-4 orangeText flex justify-around">
                <a
                  className=" hover:text-black"
                  href="https://bistro-boss-phi.vercel.app/"
                >
                  Live Link
                </a>
                <a
                  className=" hover:text-black"
                  href="https://github.com/khorsed667/Bistro-Boss.git"
                >
                  GitHub (Client)
                </a>
                <a
                  className=" hover:text-black"
                  href="https://github.com/khorsed667/Bistro-Boss-Server.git"
                >
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="single-p">
          <div className="third-project-img"></div>
          <div className="project-text">
            <div className="flex flex-col">
              <span className="my-4 blackText">Homyz</span>
              <p className="primaryText">
                Homyz is a basic project where I tried to show my basic design
                skill. I used here row CSS and this project is based on React.
                Some animation effects are used here. Here a real state company
                offered its services. They show some of their projects and
                products. There is also a conversation method via Gmail.
              </p>
              <div className="project-links py-4 orangeText flex justify-around">
                <a
                  className=" hover:text-black"
                  href="https://real-estate-phi-six.vercel.app/"
                >
                  Live Link
                </a>
                <a
                  className=" hover:text-black"
                  href="https://github.com/khorsed667/Real-Estate.git"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <hr className="my-5" />
      </div>
    </section>
  );
};

export default Project;

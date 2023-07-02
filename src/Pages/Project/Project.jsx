import "./project.css";

const Project = () => {
  return (
    <section id="projects" className="p-wrapper my-5">
      <div className="p-container paddings container-width">
        <span className="blackText">My Projects</span>
        <p className="orangeText">
          Discover a showcase of my Innovative Projects.
        </p>
        <div className="single-p">
          <div className="first-project-img"></div>
          <div className="project-text">
            <div className="flex flex-col">
              <span className="my-4 blackText">Sportopia</span>
              <p className="primaryText">
                This website is based on a summer sports campaign, where anyone
                can enroll in any sports he/she wants. This website is based on
                three categories of users. These are students, instructors, and
                admin. Where admin can make anyone an instructor. An instructor
                could add any class and the admin can remove or approve this
                class. Students can enroll in any of the classes through a
                payment-integrated system.
              </p>
              <div className="project-links py-4 orangeText flex justify-around">
                <a className=" hover:text-black" href="https://sportopia-8286a.web.app/">Live Link</a>
                <a className=" hover:text-black" href="https://github.com/khorsed667/Sportopia.git">
                  GitHub (Client)
                </a>
                <a className=" hover:text-black" href="https://github.com/khorsed667/Sportopia-server.git">
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>
        </div>
          <hr className="my-5" />
        <div className="single-p second-project">
          <div className="project-text">
            <div className="flex flex-col">
              <span className="my-4 blackText">Toyman</span>
              <p className="primaryText">
                Toyman is an online based marketplace where a seller can upload
                a toy for sale. He will see the toys that he uploads for sale
                and can delete them from here also he/she could update his sell
                post if he/she wants. Any random user can buy a toy from here.
                But for this buying operation, they need to log in or register
                first. MongoDB is used here to store user data.
              </p>
              <div className="project-links py-4 orangeText flex justify-around">
                <a className=" hover:text-black" href="https://toyman-18778.web.app/">Live Link</a>
                <a className=" hover:text-black" href="https://github.com/khorsed667/ToyMan.git">
                  GitHub (Client)
                </a>
                <a className=" hover:text-black" href="https://github.com/khorsed667/ToyMan-server.git">
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>
          <div className="second-project-img"></div>
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
                <a className=" hover:text-black" href="https://real-estate-phi-six.vercel.app/">Live Link</a>
                <a className=" hover:text-black" href="https://github.com/khorsed667/Real-Estate.git">
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

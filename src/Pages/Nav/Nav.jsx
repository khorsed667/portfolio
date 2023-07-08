import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "./Nav.css";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const getMenuStyle = (openMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !openMenu && "-1000%" };
      
    }
  };

  return (
    <section className="nav-wrapper relative w-full">
      <div className="n-container flex justify-between">
        <div className="p-name font-bold text-2xl">Khorsed.dev</div>
        <label className="link-container">
          <span
            className="nav-icon"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <AiOutlineMenu></AiOutlineMenu>
          </span>

          <ul className="nav-link mt-3" style={getMenuStyle(openMenu)}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="./developer-resume.pdf" download>Resume</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </label>
      </div>
    </section>
  );
};

export default Nav;

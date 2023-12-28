import {useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Header.css";
import { types } from "../../data/type";
const Header = ({ focus,setIsOver ,setMouseOnPage}) => {
  const [isOn, setIsOn] = useState(false);

  function handleRef() {
    setIsOn((on) => !on);
  }

  let jumping;

  window.addEventListener("scroll", () => {
    clearTimeout(jumping);

    jumping = setTimeout(() => {
      const header = document.querySelector("nav.header");
      if (window.scrollY >= 100 || window.scrollY >= 10) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }, 100);
  });
  return (
    <>
      <div id="home"  onMouseEnter={()=>setMouseOnPage(true,setIsOver)} onMouseLeave={()=>setMouseOnPage(false,setIsOver)}>
        <div className="main-page">
          <div className="content-container">
            <h4>Hello, I`m</h4>
            <h2>
              IDAN ROTENBERG{" "}
              <TypeAnimation
                sequence={types}
                speed={250}
                repeat={Infinity}
              />
            </h2>
            <p>
              I`m a CIVIL Engineer and my main goal is to became a master in
              programming. now, I`m at the beginning of my programing journey. I
              have a Passion for Creating Clean, Beautiful, Interactive,
              Minimalistic, Responsive and User Friendly WEB, Developed by
              Modular and Functional Code.
            </p>
          </div>
          <div
            className={isOn ? "img" : "img1"}
            onMouseEnter={handleRef}
            onMouseLeave={handleRef}
          ></div>
        </div>
        <ul className="btns">
          <li className="contact">
            <a href="#">Hire Me</a>
          </li>
          <li className="contact">
            <a href="#">Download CV</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

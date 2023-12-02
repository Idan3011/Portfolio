import { useRef, useState } from "react";
import "./Contactus.css";
import { FaPhoneVolume } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contactus = ({ focus3 }) => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    text: "",
    words: "",
  });

  function handleInputVal(e) {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
    
  }


  
  
  
 
  console.log(inputVal);
  
  const submitForm = useRef(inputVal);
  
  console.log(submitForm);
  

  function handleSubmitForm(e) {
    e.preventDefault();
    
    localStorage.setItem("Name", `${submitForm.current.name.value}`);
    localStorage.setItem("Email", `${submitForm.current.email.value}`);
    localStorage.setItem("Text", `${submitForm.current.text.value}`);
    localStorage.setItem("Words", `${submitForm.current.words.value}`);
    console.log(localStorage);
    
  }
  

  return (
    <div id="contactus" onMouseEnter={focus3} onMouseLeave={focus3}>
      <div className="header">
        <h2>Contact Me</h2>
        <h4>GET IN TOUCH</h4>
      </div>
      <div className="contact-us">
        <form method="post" id="form-contact" onSubmit={handleSubmitForm} ref={submitForm}>
          <h3>Send A Message</h3>
          <input
            type="text"
            name="name"
            className="contactus"
            id="name"
            placeholder="Name"
            required
            onChange={handleInputVal}
          />
          <br />
          <input
            type="email"
            name="email"
            className="contactus"
            id="email"
            placeholder="Email"
            required
            onChange={handleInputVal}
          />
          <br />
          <input
            type="text"
            name="text"
            className="contactus"
            id="subject"
            placeholder="Subject"
            required
            onChange={handleInputVal}
          />
          <br />
          <textarea
            name="words"
            id="words"
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={handleInputVal}
          ></textarea>
          <br />
          <button type="submit" name="submit" id="submit">
            Send Message
          </button>
          <br />
        </form>
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneVolume />
            <h4>Phone: </h4> <span>054-6838910</span>
          </div>
          <div className="info-item">
            <MdEmail />
            <h4>Email:</h4> <span>Idanrot91@gmail.com</span>
          </div>
          <div className="info-item">
            <FaLinkedin />
            <h4>Linkedin: </h4>
            <span>
              <a href="https://www.linkedin.com/in/idan-rotenberg-286b1b18b">
                LinkedIn Profile
              </a>
            </span>
          </div>
          <div className="info-item">
            <FaGithub />
            <h4>Github:</h4>
            <span>
              <a href="https://github.com/Idan3011">Github Project`s</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

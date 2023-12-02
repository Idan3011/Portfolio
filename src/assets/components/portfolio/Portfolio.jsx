import classRender from "../../data/data";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
const Portfolio = () => {

  return (
    <>
      {classRender.map((item) => {
        return (
          <div key={item.title} className="card-style">
            <div className={item.class}>
              <div className="popup">
                <h5>{item.title}</h5>
                <p>{item.discription}</p>
                <div className="live-demo">
                <a href={item.link} alt={item.title} >
                  {item.title}<FaGithub style={{width: '1rem', marginLeft: '0.5rem'}}/></a>
                  <a href={item.link1} alt={item.title}>To Live Demo<GoLinkExternal style={{marginLeft: '0.3rem'}} /></a>
                  </div>
              </div>
            </div>
          </div>
        );
      })}       
    </>
  );
};

export default Portfolio;

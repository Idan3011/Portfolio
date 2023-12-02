import { useState} from "react";
import Header from './assets/components/header/Header'
import About from './assets/components/about/About'
import Cards from './assets/components/cards/Cards'
import Footer from './assets/components/footer/Footer'
import Contactus from './assets/components/contactus/Contactus'
import Navbar from './assets/components/navbar/Navbar'



import "./App.css";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [isOver1, setIsOver1] = useState(false);
  const [isOver2, setIsOver2] = useState(false);
  const [isOver3, setIsOver3] = useState(false);

  function handleIsOn() {
    setIsOver((isOver) => !isOver);
  }
  function handleIsOn1() {
    setIsOver1((isOver1) => !isOver1);
  }
  function handleIsOn2() {
    setIsOver2((isOver2) => !isOver2);
  }
  function handleIsOn3() {
    setIsOver3((isOver3) => !isOver3);
  }

  return (
    <>
      <Navbar
        isOver={isOver}
        isOver1={isOver1}
        isOver2={isOver2}
        isOver3={isOver3}
      />
      <Header focus={handleIsOn} isOver={isOver} />
      <About focus1={handleIsOn1} isOver1={isOver1} />
      <Cards focus2={handleIsOn2} isOver2={isOver2} />
      <Contactus focus3={handleIsOn3} isOver3={isOver3} />
      <Footer />
    </>
  );
}

export default App;

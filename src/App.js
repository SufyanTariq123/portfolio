import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/Body/About/About";
import Skills from "./Components/Body/Skills/Skills";
import Projects from "./Components/Body/Projects/Index";
import Education from "./Components/Body/Education/Index";
import Contact from "./Components/Body/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;

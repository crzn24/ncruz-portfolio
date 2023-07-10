import logo from './logo.svg';
import './App.css';
import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
// import About from "./pages/About.js";
// import Portfolio from "./pages/Portfolio.js";
// import Contact from "./pages/Contact.js";
// import Resume from "./pages/Resume.js";

// import Career from "./pages/Career.js";
// import Education from "./pages/Education";
// import FooterApp from "./components/Footer.js";


function App() {
  return (
    <Router>
      <Header />
      <div className="container flex flex-col justify-center items-center md:ml-[5rem]">
        <Routes>
          {/* <Route path="/" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/education" element={<Education />} /> */}
        </Routes>
      </div>
      {/* <ScrollToTop
        smooth
        component={<MySVG />}
        className="bg-transparent grid place-content-center arrow"
      /> */}
      {/* <FooterApp /> */}
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";

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

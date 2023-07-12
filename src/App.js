import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; // can click control + spacebar to autoimport when filling in div with components below
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;

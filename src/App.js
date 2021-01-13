import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import Services from './components/Services'
import About from './components/About.jsx'
import Skills from './components/Skills'
import Portofolio from './components/Portofolio'
import Project from './components/Project'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Erjus from './components/Erjus';
import Copyright from './components/Copyright';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Home />
        <Services />
        <About />
        <Skills />
        <Portofolio />
        <Project />
        <Blog />
        <Contact />
        <Erjus />
        <Copyright />
  
      </Router>



    </div>
  );
}

export default App;

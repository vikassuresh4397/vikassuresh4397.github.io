
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";

import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Home from './components/Home';
import About from './components/About';

import GithubFolder from './components/GithubFolder';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <div className='break'>
      <br></br>
      </div>
<About />
   
      <Skills />
      <Projects />
      <GithubFolder />
      <Contact />
      <Footer />
    
      
    </div>
  );
}

export default App;


import './App.css';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from './utils/particles';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
function App() {
  const handleInit=async(main)=>{
    await loadFull(main)
  }
  return (
    <div className="App">
      <Particles id="particles" options={particles} init={handleInit}/>
      <Navbar/>
      <br/>
      <br/>
      <HomePage/>
    </div>
  );
}

export default App;

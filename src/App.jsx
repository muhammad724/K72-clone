
import { Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import Agences from './pages/Agences.jsx';
import Project from './pages/Project.jsx';
import './App.css';


function App() {


  return (
    
      <div className='text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Agences" element={<Agences />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </div>
  );
}

export default App;

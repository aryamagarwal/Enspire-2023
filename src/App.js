import './App.css';
import Navbar from './Components/navbar';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Sponsor from './Pages/sponsor';
import Events from './Pages/Events';
import { Routes , Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/team" element={<Team/>} />
     <Route path="/sponsors" element={<Sponsor/>} />
     <Route path="/events" element={<Events/>} />
    </Routes>
    
    </>
  );
}

export default App;

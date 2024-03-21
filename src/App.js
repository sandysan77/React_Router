import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import { All } from './Components/All';
import { Career } from './Components/Career';
import { Cybersecurity } from './Components/Cybersecurity';
import { Datascience } from './Components/Datascience';
import { Fullstackdevelopment } from './Components/Fullstackdevelopment';


export default function App() {
  return (
    <div>

      <nav>

        <Link to='/All'>All</Link>
        <Link to='/FULL STACK DEVELOPMENT'>FULL STACK DEVELOPMENT</Link>
        <Link to='/DATA SCIENCE'>DATA SCIENCE</Link>
        <Link to='/CYBER SECURITY'>CYBER SECURITY</Link>
        <Link to='/CAREER'>CAREER</Link>

      </nav>

      <Routes>

        <Route path="/All" element={<All />} />
        <Route path="/FULL STACK DEVELOPMENT" element={<Fullstackdevelopment />} />
        <Route path="/DATA SCIENCE" element={<Datascience />} />
        <Route path="/CYBER SECURITY" element={<Cybersecurity />} />
        <Route path="/CAREER" element={<Career />} />
      </Routes>
    </div>
  );
}



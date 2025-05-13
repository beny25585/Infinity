import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import FAOs from './components/FAOs';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/contact" element={<Contact />} />
       <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/FAQs" element={<FAOs />} />
    </Routes>
  </BrowserRouter>
);

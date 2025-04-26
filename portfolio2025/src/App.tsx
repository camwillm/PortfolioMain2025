import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import MoveToTop from './components/moveToTop';
import ParticlesBackground from './components/ParticlesBackground';
import NeonCursor from './components/NeonCursor';
import SocialSidebar from './components/SocialSideBar';

import Home from './camspages/home';
import About from './camspages/About';
import Resume from './camspages/Resume';
import Project from './camspages/Projects';

function App() {
  return (
    <div style={{ cursor: "none" }}>
      <Router>
        <NeonCursor />
        <ParticlesBackground />
        <Nav />
        <SocialSidebar />
        <MoveToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

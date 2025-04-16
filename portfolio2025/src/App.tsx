import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import MoveToTop from './components/moveToTop';

import Home from './camspages/home';
import About from './camspages/About';
import Resume from './camspages/Resume';
import Project from './camspages/Projects';

function App() {
  return (
    <Router>
      <Nav />
      <MoveToTop />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Updated to '/' */}
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

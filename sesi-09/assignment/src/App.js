import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Experience from './component/Experience';
import About from './component/About';
import Awards from './component/Awards';
import Contact from './component/Contact';
import Skill from './component/Skill';
import Interest from './component/Interest';
import ScrolltoTop from './ScrolltoTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrolltoTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Routes>
          <Route path="/awards" element={<Awards />} />
        </Routes>
        <Routes>
          <Route path="/skill" element={<Skill />} />
        </Routes>
        <Routes>
          <Route path="/interest" element={<Interest />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ScrolltoTop>
    </Router>
  );
}

export default App;

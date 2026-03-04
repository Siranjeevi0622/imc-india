import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Calibration from './components/Calibration';
import Footer from './components/Footer';
// ... import other pages

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/calibration" element={<Calibration/>} />
        {/* <Route path="/accreditation" element={<Accreditation/>} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
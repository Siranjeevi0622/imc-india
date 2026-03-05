import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calibration from './components/Calibration';
import Footer from './components/Footer';
import Adobe from './components/Adobe';
import AboutUs from './components/AboutUs';
// ... import other pages

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/calibration" element={<Calibration/>} />
        <Route path="/adobe" element={<Adobe/>} />
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
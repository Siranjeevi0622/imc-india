import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calibration from './components/Calibration';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Accreditation from './components/Accreditation';
import Enquiry from './components/Enquiry';  
// ... import other pages




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/calibration" element={<Calibration/>} />
        <Route path="/accreditation" element={<Accreditation/>} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
   
  );
}

export default App;
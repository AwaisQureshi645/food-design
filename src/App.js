
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact us/Contact';
import About from './Components/About/About';
// import { Home } from './Components/Home/Home';

function App() {
  return (
    <>
     
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>




      <Footer />
    </>
  );
}

export default App;

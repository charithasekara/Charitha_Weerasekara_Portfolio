import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/about/about';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio'; 

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='contact' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App

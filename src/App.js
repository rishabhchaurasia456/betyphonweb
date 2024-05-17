import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/_App/Navbar';
import Home from './pages/Home';
import Footer from './components/_App/Footer';
import Pricing from './pages/Pricing';
import Feature from './pages/Feature';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pricing' element={<Pricing/>} />
            <Route path='/feature' element={<Feature/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

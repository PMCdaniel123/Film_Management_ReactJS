// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

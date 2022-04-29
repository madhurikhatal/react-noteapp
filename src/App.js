import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Navbar />
          <Route index element={<Home/>}/>
          <Route index element={<About/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

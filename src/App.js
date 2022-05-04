// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/NoteState';

function App() {
  return (
    <>
      <NoteState >
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
        </Routes>

      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

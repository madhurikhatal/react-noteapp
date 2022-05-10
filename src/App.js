// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
      <NoteState >
      <BrowserRouter>
        <Navbar />
        <Alert message="welcome to app"/>
        <div className='container my-3'>
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

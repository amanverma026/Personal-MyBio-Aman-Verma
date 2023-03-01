import logo from './adesignlogo.jpg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (

      <div className="App">
        <nav className='nav-cont'>
          <img src={logo} className="alogo-cont" alt="logo" />
          <div className='nav-option'>
            <p className='p-App-link'>
              <Link to={'/'} className="App-link">Home</Link>
            </p>
            <p className='p-App-link'>
              <Link to={'/About'} className="App-link">About</Link>
            </p>
            <p className='p-App-link'>
              <Link to={'/Blog'} className="App-link">Blog</Link>
            </p>
          </div>
        </nav>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About />} />
            
            
          </Routes>
        </div>

  </div>
  );
}

export default App;

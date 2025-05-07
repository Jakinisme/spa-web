import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Landing from './pages/Landing'
import SignUp from './pages/SignUp'
import './App.css'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/landing" className="nav-link">Landing</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Analytics />
    </div>
  )
}

export default App 
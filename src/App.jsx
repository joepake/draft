import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Terms from './pages/Terms.jsx'
import DeleteAccount from './pages/DeleteAccount.jsx'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="brand">
          KidGate
        </Link>
        <nav className="nav">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms">Terms &amp; Conditions</NavLink>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} KidGate. All rights reserved.</p>
      </footer>
    </div>
  )
}

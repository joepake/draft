import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <h1>KidGate</h1>
      <p>
        KidGate helps parents keep their children safe online with screen-time
        management, content filtering, and activity insights.
      </p>
      <div className="links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms &amp; Conditions</Link>
      </div>
    </div>
  )
}

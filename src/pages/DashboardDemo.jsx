import { Link } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'
import { demoData } from '../dashboard/demoData.js'

export default function DashboardDemo() {
  return (
    <Dashboard
      data={demoData}
      notice={
        <div className="demo-note">
          Interactive preview with sample data — this is what the KidGate parent
          dashboard shows once a child device is connected.{' '}
          <Link to="/dashboard">Sign in to see your own family →</Link>
        </div>
      }
    />
  )
}

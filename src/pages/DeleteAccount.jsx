import { Link } from 'react-router-dom'
import LegalNote from '../i18n/LegalNote.jsx'

export default function DeleteAccount() {
  return (
    <article className="legal">
      <h1>Account &amp; Data Deletion</h1>
      <p className="updated">Last updated: August 4, 2026</p>
      <LegalNote />

      <p>
        This page explains how to delete your KidGate account and the data
        associated with it. You can request deletion at any time, and you do
        not need to have the app installed to do so.
      </p>

      <h2>Option 1: Delete your account in the app</h2>
      <ul>
        <li>Open the KidGate app and sign in.</li>
        <li>
          Go to <em>Settings &rarr; Account &rarr; Delete Account</em>.
        </li>
        <li>Confirm the deletion.</li>
      </ul>

      <h2>Option 2: Request deletion by email</h2>
      <ul>
        <li>
          Send an email to{' '}
          <a href="mailto:support@kidgate.app?subject=Account%20Deletion%20Request">
            support@kidgate.app
          </a>{' '}
          with the subject line &quot;Account Deletion Request&quot;.
        </li>
        <li>
          Send the request from the email address associated with your KidGate
          account so we can verify your identity.
        </li>
        <li>
          We will confirm your request and complete the deletion, normally
          within 30 days.
        </li>
      </ul>

      <h2>What is deleted</h2>
      <p>Deleting your account permanently removes:</p>
      <ul>
        <li>Your parent account information (name, email address).</li>
        <li>All child profiles you created.</li>
        <li>
          All activity data collected from managed devices, including app
          usage, screen-time history, browsing activity, location history,
          and Check-In and SOS photos.
        </li>
        <li>Your parental control settings and preferences.</li>
      </ul>

      <h2>Retention timelines</h2>
      <ul>
        <li>
          Data is deleted from our active systems within <strong>30 days</strong>{' '}
          of a verified request.
        </li>
        <li>
          Copies in encrypted backups are purged within <strong>90 days</strong>.
        </li>
        <li>
          We may retain a minimal set of records where required by law (for
          example, transaction records for tax purposes), for only as long as
          legally required.
        </li>
      </ul>

      <h2>Partial deletion</h2>
      <p>
        If you want to delete only some data (for example, a single child
        profile or activity history) without closing your account, you can do
        so in the app, or contact us at{' '}
        <a href="mailto:support@kidgate.app">support@kidgate.app</a>.
      </p>

      <p>
        For more details about how we handle your data, see our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>
    </article>
  )
}

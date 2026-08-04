import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <article className="legal">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: August 4, 2026</p>

      <p>
        KidGate (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides a
        parental control application that helps parents and legal guardians
        manage their children&apos;s device usage, screen time, and online
        safety (the &quot;Service&quot;). This Privacy Policy explains what
        information we collect, how we use it, and the choices you have.
      </p>
      <p>
        By using the Service, you agree to the collection and use of
        information in accordance with this Privacy Policy.
      </p>

      <h2>1. Who This Policy Covers</h2>
      <p>The Service is used by two types of people:</p>
      <ul>
        <li>
          <strong>Parents / Guardians:</strong> adults who create an account
          and configure parental controls.
        </li>
        <li>
          <strong>Children:</strong> minors whose devices are managed by a
          parent or guardian through the Service.
        </li>
      </ul>
      <p>
        We only collect information about a child when a parent or legal
        guardian has set up and consented to monitoring for that child.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        <strong>Information provided by parents:</strong>
      </p>
      <ul>
        <li>Account information, such as name and email address.</li>
        <li>
          Child profile information, such as the child&apos;s name or nickname
          and age, provided by the parent.
        </li>
        <li>Parental control settings and preferences.</li>
      </ul>
      <p>
        <strong>
          Information collected from managed devices (with parental consent):
        </strong>
      </p>
      <ul>
        <li>App usage and screen-time data.</li>
        <li>Web browsing activity subject to the filtering settings.</li>
        <li>
          Device location, if the parent enables location features.
        </li>
        <li>Device information, such as device model and operating system.</li>
      </ul>
      <p>
        <strong>Information collected automatically:</strong>
      </p>
      <ul>
        <li>
          Log and diagnostic data, such as crash reports and performance
          metrics, used to keep the Service reliable.
        </li>
      </ul>

      <h2>3. Device Permissions</h2>
      <p>
        To provide its features, the app may request certain device
        permissions. Each permission is requested with a clear explanation at
        the time it is needed, and the Service only uses these permissions for
        the parental control features described in this policy:
      </p>
      <ul>
        <li>
          <strong>Location</strong> &mdash; to show a managed device&apos;s
          location to the parent, only if location features are enabled.
        </li>
        <li>
          <strong>App usage access</strong> &mdash; to measure screen time and
          generate app-usage reports.
        </li>
        <li>
          <strong>Notifications</strong> &mdash; to deliver alerts to the
          parent.
        </li>
        <li>
          <strong>Device administration / screen-time management</strong>{' '}
          &mdash; to enforce the limits and filters configured by the parent.
        </li>
      </ul>
      <p>
        You can revoke these permissions at any time in your device settings,
        although some features may stop working as a result.
      </p>

      <h2>4. How We Use Information</h2>
      <ul>
        <li>To provide, operate, and maintain the Service.</li>
        <li>
          To display activity reports and alerts to the parent or guardian.
        </li>
        <li>To enforce the parental control settings chosen by the parent.</li>
        <li>To improve, troubleshoot, and secure the Service.</li>
        <li>To communicate with you about your account and the Service.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <p>
        We do <strong>not</strong> sell personal information, and we do not use
        children&apos;s data for advertising or marketing purposes.
      </p>

      <h2>5. Children&apos;s Privacy</h2>
      <p>
        Protecting children&apos;s privacy is central to our Service. We
        collect information about children only at the direction of, and with
        the verifiable consent of, a parent or legal guardian. Parents can
        review, update, or delete their child&apos;s information at any time
        from within the app, or by contacting us. If we learn that we have
        collected personal information from a child without proper parental
        consent, we will delete it promptly.
      </p>

      <h2>6. Sharing of Information</h2>
      <p>We share information only in the following circumstances:</p>
      <ul>
        <li>
          <strong>With service providers</strong> who help us operate the
          Service (such as cloud hosting), under contractual confidentiality
          obligations.
        </li>
        <li>
          <strong>For legal reasons,</strong> when required by law, regulation,
          or valid legal process.
        </li>
        <li>
          <strong>In a business transfer,</strong> such as a merger or
          acquisition, in which case we will notify you before your
          information becomes subject to a different privacy policy.
        </li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to
        provide the Service and for legitimate legal or business purposes.
        Activity data is retained for a limited period and then deleted or
        anonymized. When your account is deleted, we delete the associated
        personal information as described in Section 8, except where retention
        is required by law.
      </p>

      <h2>8. Account and Data Deletion</h2>
      <p>
        You can request deletion of your account and associated data{' '}
        <strong>at any time</strong>, using any of the following methods:
      </p>
      <ul>
        <li>
          <strong>In the app:</strong> go to{' '}
          <em>Settings &rarr; Account &rarr; Delete Account</em>. This deletes
          your account and all associated data, including all child profiles
          and activity data.
        </li>
        <li>
          <strong>On the web:</strong> follow the steps on our{' '}
          <Link to="/delete-account">Account &amp; Data Deletion</Link> page.
          You do not need to have the app installed to request deletion.
        </li>
        <li>
          <strong>By email:</strong> send a request to{' '}
          <a href="mailto:kidgate.support@gmail.com">kidgate.support@gmail.com</a> from
          the email address associated with your account.
        </li>
      </ul>
      <p>When your account is deleted:</p>
      <ul>
        <li>
          Your account information, child profiles, activity data, location
          history, and settings are permanently deleted from our systems
          within <strong>30 days</strong>.
        </li>
        <li>
          Copies in encrypted backups are purged within <strong>90 days</strong>.
        </li>
        <li>
          We may retain a minimal set of records where required by law (for
          example, transaction records for tax purposes) or to resolve
          disputes; such data is kept only as long as legally required.
        </li>
      </ul>
      <p>
        You may also request deletion of specific data (for example, a single
        child profile or activity history) without deleting your entire
        account, either in the app or by contacting us.
      </p>

      <h2>9. Security</h2>
      <p>
        We use administrative, technical, and physical safeguards designed to
        protect personal information, including encryption in transit. No
        method of transmission or storage is completely secure, so we cannot
        guarantee absolute security.
      </p>

      <h2>10. Your Rights and Choices</h2>
      <ul>
        <li>Access, correct, or delete your personal information.</li>
        <li>
          Review and delete your child&apos;s information, or withdraw consent
          for its collection.
        </li>
        <li>
          Delete your account and data at any time (see Section 8).
        </li>
        <li>
          Depending on where you live, you may have additional rights under
          applicable data protection laws (such as the GDPR or CCPA),
          including the right to data portability and the right to lodge a
          complaint with a supervisory authority.
        </li>
      </ul>
      <p>
        To exercise these rights, use the controls in the app or contact us
        using the details below. We respond to verified requests within the
        timeframes required by applicable law.
      </p>

      <h2>11. International Transfers</h2>
      <p>
        Your information may be processed in countries other than your own. We
        take steps to ensure that appropriate safeguards are in place when
        information is transferred internationally.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the
        updated version on this page and update the &quot;Last updated&quot;
        date. For material changes, we will provide additional notice, such as
        an in-app notification or email.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data practices,
        contact us at{' '}
        <a href="mailto:kidgate.support@gmail.com">kidgate.support@gmail.com</a>.
      </p>
    </article>
  )
}

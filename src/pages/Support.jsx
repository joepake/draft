import { Link } from 'react-router-dom'

export default function Support() {
  return (
    <article className="legal">
      <h1>KidGate Support</h1>
      <p className="updated">We&apos;re here to help</p>

      <h2>Contact Us</h2>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:kidgate.support@gmail.com">
            kidgate.support@gmail.com
          </a>
        </li>
        <li>
          <strong>Response time:</strong> within 24 hours (Monday&ndash;Friday)
        </li>
      </ul>
      <p>
        When contacting us, please include the email address of your KidGate
        parent account and a short description of the issue so we can help you
        faster.
      </p>

      <h2>Getting Started</h2>
      <ul>
        <li>
          <strong>1. Set up the parent device.</strong> Install KidGate, open
          the app, and choose <em>This is a parent device</em>. Sign in with
          Google, Apple, or email, and name your family.
        </li>
        <li>
          <strong>2. Set a Parent PIN.</strong> Go to{' '}
          <em>Settings &rarr; Security</em> and set a 6-digit Parent PIN. You
          need it to change sensitive settings and to choose blocked apps on
          the child device. Don&apos;t share it with your children.
        </li>
        <li>
          <strong>3. Connect the child device.</strong> Install KidGate on
          your child&apos;s device and choose{' '}
          <em>This is a child device</em>. On the parent device, open{' '}
          <em>Family &rarr; + &rarr; Connect a child device</em>, then scan
          the QR code shown on the child device (or enter the 6-character
          code). Confirm the connection on the child device.
        </li>
        <li>
          <strong>4. Grant permissions on the child device.</strong> Open the{' '}
          <em>Status</em> screen on the child device and allow every
          permission KidGate requests — on Android: notifications, Usage
          Access, Display over other apps, Accessibility, and unrestricted
          battery; on iOS: <em>Allow App &amp; Website Usage</em> (Screen
          Time). Controls will not work fully until these are on.
        </li>
        <li>
          <strong>5. Configure controls.</strong> From the parent device, open
          the child&apos;s device card and set the Daily Limit, Blocked
          Hours, Blocked Apps, Web Filter, and location features.
        </li>
      </ul>
      <p>
        The app also includes a built-in step-by-step guide:{' '}
        <em>Settings &rarr; User guide</em>, covering device pairing,
        permissions, daily controls, and safety features in detail.
      </p>

      <h2>Frequently Asked Questions</h2>

      <p>
        <strong>How do I pair the parent and child devices?</strong>
      </p>
      <p>
        On the child device, open KidGate and choose{' '}
        <em>This is a child device</em> — a QR code and a 6-character code
        appear. On the parent device, open{' '}
        <em>Family &rarr; + &rarr; Connect a child device</em> and scan the QR
        code (recommended) or enter the code manually. Then confirm the
        parent&apos;s name on the child device. Codes expire — if pairing
        fails, tap <em>New code</em> on the child device and try again.
      </p>

      <p>
        <strong>Can two parents manage the same family?</strong>
      </p>
      <p>
        Yes. On the family owner&apos;s device, open{' '}
        <em>Family &rarr; + &rarr; Add another parent device</em> and share
        the invite QR code or code. The other parent installs KidGate, signs
        in as a parent, and chooses <em>Family &rarr; + &rarr; Join family</em>.
        The owner then approves the request. One subscription covers the whole
        family; only the owner pays.
      </p>

      <p>
        <strong>How does the free trial work?</strong>
      </p>
      <p>
        The trial starts when your first parent and child devices are
        connected, and gives full access to every feature. Removing a child
        device does not reset the trial. When it ends, subscribe to Premium to
        keep using KidGate.
      </p>

      <p>
        <strong>How do I cancel my subscription?</strong>
      </p>
      <p>
        Subscriptions are billed through the App Store or Google Play, not by
        KidGate directly. On iOS: <em>Settings &rarr; your name &rarr;
        Subscriptions</em>. On Android: <em>Google Play &rarr; profile icon
        &rarr; Payments &amp; subscriptions &rarr; Subscriptions</em>. The
        subscription renews automatically unless you cancel at least 24 hours
        before the current period ends.
      </p>

      <p>
        <strong>How do I restore my purchases?</strong>
      </p>
      <p>
        On the parent device, open the <em>Plans</em> screen and tap{' '}
        <em>Restore purchases</em>. Make sure you are signed in with the same
        app store account you used for the original purchase. Note that only
        the family owner can subscribe or restore purchases.
      </p>

      <p>
        <strong>Why is screen-time data not showing up?</strong>
      </p>
      <p>
        Usage data comes from the child device. Check that the child device is
        online, then open KidGate on it and look at the <em>Status</em>{' '}
        screen — every permission row should show as allowed (on Android,
        Usage Access is required for screen-time tracking). Reports can take a
        few minutes to sync.
      </p>

      <p>
        <strong>Why doesn&apos;t locking or Blocked Hours work?</strong>
      </p>
      <p>
        On Android, locking needs <em>Display over other apps</em> and the{' '}
        <em>Accessibility</em> helper enabled, plus unrestricted battery. On
        Xiaomi, Samsung, Oppo, Vivo, and similar devices, also allow autostart
        and remove KidGate from any &quot;sleeping apps&quot; list (see{' '}
        <em>Status &rarr; Keep KidGate running</em> on the child device). On
        iOS, locking depends on Screen Time authorization. If a permission is
        turned off later, you&apos;ll get a Protection Alert on the parent
        device.
      </p>

      <p>
        <strong>How do I block specific apps?</strong>
      </p>
      <p>
        App selection happens on the child device: open{' '}
        <em>KidGate &rarr; Settings</em>, enter the Parent PIN, choose{' '}
        <em>Choose apps to block</em>, and save. Then, on the parent device,
        open the device&apos;s <em>Blocked Apps</em> screen and turn on{' '}
        <em>Enable App Blocking</em>. On iOS, Apple may hide exact app names
        from the parent device — that&apos;s a platform limitation.
      </p>

      <p>
        <strong>Why is the child&apos;s location not updating?</strong>
      </p>
      <p>
        Location must be allowed for KidGate on the child device, and the
        device needs a network connection. Open the device&apos;s{' '}
        <em>Location</em> screen on the parent device and pull down to
        refresh. Battery-saver modes can delay updates, and indoor GPS can be
        less precise.
      </p>

      <p>
        <strong>How do I remove KidGate from my child&apos;s device?</strong>
      </p>
      <p>
        Remove the device from the parent app first (open the device in{' '}
        <em>Family</em> and choose remove), then uninstall the app on the
        child&apos;s device.
      </p>

      <p>
        <strong>How do I delete my account and data?</strong>
      </p>
      <p>
        In the parent app, go to <em>Settings &rarr; Account &rarr; Delete
        account</em>. This permanently deletes your family account and all
        data — devices, activity, location history, and SOS photos — for
        every parent and child. See our{' '}
        <Link to="/delete-account">Account &amp; Data Deletion</Link> page for
        all options, including deletion without having the app installed.
      </p>

      <h2>Legal</h2>
      <ul>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </li>
        <li>
          <Link to="/delete-account">Account &amp; Data Deletion</Link>
        </li>
      </ul>
    </article>
  )
}

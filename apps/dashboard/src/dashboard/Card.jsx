/**
 * The dashboard's card.
 *
 * Lifted out of `pages/Dashboard.jsx` when `ControlsTab` moved to its own
 * file and took fourteen of these with it. Same reason `Toggle` and `Toast`
 * are modules: a second drawing of a card is how two panels on one screen come
 * to disagree about what a heading looks like.
 */
export default function Card({ title, subtitle, action, className = '', children }) {
  return (
    <section className={`card ${className}`}>
      {/* `subtitle` counts too. A card whose name is already the page's heading
          passes no `title` — and the gate used to drop its subtitle with it,
          silently, which is how a "3 open" count disappears from a card that
          still had one to show. */}
      {(title || subtitle || action) && (
        <header className="card-head">
          <div>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

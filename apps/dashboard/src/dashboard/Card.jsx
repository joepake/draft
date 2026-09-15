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
      {(title || action) && (
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

/**
 * The dashboard's card.
 *
 * Lifted out of `pages/Dashboard.jsx` when `ControlsTab` moved to its own
 * file and took fourteen of these with it. Same reason `Toggle` and `Toast`
 * are modules: a second drawing of a card is how two panels on one screen come
 * to disagree about what a heading looks like.
 */
/**
 * `id` is how a control-centre card finds its destination.
 *
 * The grid opens a PANEL, not a screen per action the way the phone does, so a
 * parent who tapped "Daily limit" landed on a page called "Screen time"
 * holding five cards and had to find the one they asked for. `Dashboard.jsx`
 * scrolls to `id` and flashes it; the id is the action's own
 * (`@kidgate/core/domain/deviceDetailActions`), so the two lists cannot drift.
 */
export default function Card({
  id,
  title,
  subtitle,
  action,
  className = '',
  children,
}) {
  return (
    <section id={id} className={`card ${className}`}>
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

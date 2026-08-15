# Web locales

The web's own key space, kept separate from `../locales` on purpose.

`apps/site` and `apps/dashboard` speak to a different reader than the mobile
app: marketing copy, legal pages, a browser sign-in flow. Their `common` and
`nav` namespaces genuinely differ from the app's, so merging the two key spaces
would either rename hundreds of call sites or silently pick one side's wording
for keys that mean different things.

One package, two key spaces. What that buys is the thing that mattered: adding a
fifteenth language, or fixing a mistranslation, happens once — the fourteen
locale files here were duplicated across both web apps until this move.

`useT` stays in each app: it is a React hook, and this package emits no
component code.

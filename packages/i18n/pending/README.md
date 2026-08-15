# Pending tests

`pushCopyParity.test.ts.pending` guards that every app language also has push
copy in `functions/lib/i18n.js` — without it, a new language's users get every
notification in English.

It cannot run yet: `functions/` has not been migrated (step 11), and it sits
outside the Yarn workspace by design, so this package cannot import it. Restore
the file and repoint the `require` when step 11 lands.

Parked rather than deleted, and named `.pending` so it cannot silently pass by
being skipped.

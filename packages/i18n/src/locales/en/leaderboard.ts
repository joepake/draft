export const leaderboard = {
  title: 'Star chart',
  thisWeek: 'This week',
  resetsNote: 'Starts again every Monday.',
  rowA11y: '{{rank}}. {{name}}, {{count}} stars',
  rowA11y_one: '{{rank}}. {{name}}, 1 star',
  settingsTitle: 'Star chart',
  settingsBody: 'Let your children see how many stars each of them earned this week.',
  childrenTitle: 'Children',
  manageAccessibility: 'Manage children and devices',
  addChild: 'Add a child',
  // Toast confirming the "+" menu's add-a-child: a child with no device lands
  // in the strip at the bottom of the Family list, below the fold.
  childAdded: 'Child added.',
  childNameLabel: 'Name',
  childNamePlaceholder: 'e.g. Mai',
  unassigned: 'Not assigned',
  removeChild: 'Remove',
  removeChildConfirmTitle: 'Remove this child?',
  removeChildConfirmBody:
    'Their devices stay paired and keep reporting — they just stop counting for anyone until you assign them again.',
  // The children tab before anyone is on it. A family pairs devices and adds
  // people in either order, so this says what the tab is for rather than
  // treating the roster as a step that was skipped.
  emptyTitle: 'No children yet',
  emptyBody: 'Add each child here, then assign the devices they use.',
} as const;

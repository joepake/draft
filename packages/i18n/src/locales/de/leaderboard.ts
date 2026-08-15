export const leaderboard = {
  title: 'Sternetafel',
  thisWeek: 'Diese Woche',
  resetsNote: 'Beginnt jeden Montag neu.',
  rowA11y: '{{rank}}. {{name}}, {{count}} Sterne',
  settingsTitle: 'Sternetafel',
  settingsBody:
    'Ihre Kinder sehen, wie viele Sterne jedes von ihnen diese Woche gesammelt hat.',
  childrenTitle: 'Kinder',
  childrenBody:
    'Ordnen Sie Geräte den Personen zu, die sie nutzen. Ein Kind kann mehrere haben.',
  addChild: 'Kind hinzufügen',
  childNameLabel: 'Name',
  childNamePlaceholder: 'z. B. Mai',
  unassigned: 'Nicht zugeordnet',
  assignLabel: 'Genutzt von',
  assignNobody: 'Noch niemand',
  deviceCount: '{{count}} Geräte',
  removeChild: 'Entfernen',
  removeChildConfirmTitle: 'Dieses Kind entfernen?',
  removeChildConfirmBody:
    'Die Geräte bleiben gekoppelt und melden weiter — sie zählen nur für niemanden mehr, bis Sie sie erneut zuordnen.',
  needsTwoChildren: 'Fügen Sie ein zweites Kind hinzu, um die Sternetafel zu starten.',
} as const;

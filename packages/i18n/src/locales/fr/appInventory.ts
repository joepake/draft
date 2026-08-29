export const appInventory = {
  title: 'Applications sur cet appareil',
  subtitle: 'Tout ce que KidGate a trouvé installé, pas seulement ce qui a changé.',
  summaryFlagged: '{{flagged}} applications sur {{total}} méritent un coup d’œil',
  summaryClear: 'Rien à signaler parmi {{total}} applications',
  flaggedTitle: 'À regarder de plus près',
  otherTitle: 'Tout le reste',
  unclassifiedTitle: 'Pas encore identifiées',
  scannedLabel: 'Dernière analyse',
  staleNote:
    'Cette liste n’est plus à jour. Elle se rafraîchira à la prochaine connexion de l’appareil.',
  truncatedNote: 'Affichage de {{shown}} applications sur {{total}} trouvées.',
  firstScanNote:
    'C’est la première analyse : KidGate ne peut pas dire quand chacune est arrivée.',
  newBadge: 'Nouveau',
  ageBadge: '{{age}}+',
  emptyTitle: 'Aucune analyse pour l’instant',
  emptySubtitle:
    'L’appareil publiera sa liste d’applications à sa prochaine connexion.',
  unsupportedTitle: 'Cet appareil ne peut pas lister ses applications',
  unsupportedIos:
    'Apple n’autorise aucune application à lire ce qui est installé sur un iPhone ou un iPad ; KidGate ne peut donc signaler les applications qu’au moment où elles sont utilisées.',
  unsupportedGeneric:
    'Cet appareil ne signale pas les applications qui y sont installées.',
  incompleteNote:
    'Une application sans icône sur l’écran d’accueil peut ne pas apparaître ici.',
  blockHint:
    'Pour bloquer une application, ouvrez Applications bloquées sur l’appareil lui-même.',
  howItWorksLabel: 'Comment fonctionne cette liste',
} as const;

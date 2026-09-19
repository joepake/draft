export const blockedApps = {
  title: 'ブロックされたアプリ',
  installApprovalTitle: '新しいアプリの承認',
  installApprovalSubtitleOn:
    '今後インストールされたアプリは、あなたが承認するまでブロックされたままになります。',
  installApprovalSubtitleOff:
    'オンにすると、新しくインストールされたアプリはすべて、承認するまでブロックされます。',
  installApprovalSubtitleIos:
    'iPhoneとiPadでは、代わりにApp Storeが非表示になります — Appleが1つずつアプリを承認することを許可していないためです。',
  installApprovalStatusOn: '新しいアプリには承認が必要',
  installApprovalStatusOff: '新しいアプリは自由に開けます',
  installApprovalStatusIos: 'App Storeを非表示',
  installApprovalAccessibilityLabel: '新しいアプリの承認',
  installApprovalInfoTitle: '承認の仕組み',
  installApprovalInfoLine1:
    'この機能をオンにした後にインストールされたアプリは、あなたを待たずにお子さまのデバイスでブロックされます。',
  installApprovalInfoLine2:
    '通知が届き、そのアプリは以下の一覧と「アプリ」に、許可するまで表示され続けます。',
  installApprovalInfoLine3:
    'アプリを許可すると、すぐに開けるようになります。許可しなければ、ブロックされたままです。',
  pendingSectionTitle: '自動的にブロックされ、承認待ち',
  pendingSectionSubtitle:
    '承認機能をオンにした後にインストールされたものです。ここにあるものはお子さまのデバイスで選んだものではありません。',
  pendingInstalledAt: '{{when}}にインストール',
  pendingEmpty: '承認待ちの新しいアプリはありません。',
  allowApp: '許可',
  allowingApp: '許可中…',
  toastAppAllowed: '{{appName}}を今すぐ開けるようになりました。',
  toastAllowFailed: 'このアプリを許可できませんでした。もう一度お試しください。',
  toastInstallApprovalSaveFailed: '保存できませんでした。もう一度お試しください。',
  toastChooseAppsFirst:
    'まず、お子さまに KidGate の設定を開き、ブロックするアプリを選択してもらってください。',
  toastSaveFailed: '保存できませんでした。もう一度お試しください。',
  statusBlockingOn: 'ブロック中',
  statusBlockingOff: 'ブロックなし',
  heroTitle: 'ブロック対象として選択されたアプリ',
  heroSubtitle:
    'これらのアプリとカテゴリはお子さまのデバイスで選択されます。KidGate がリストを同期し、ここで確認できます。',
  statAppsLabel: 'アプリ',
  statCategoriesLabel: 'カテゴリ',
  toggleTitle: 'アプリブロックを有効にする',
  toggleSubtitleOn: '選択したアプリはお子さまのデバイスでブロックされています。',
  toggleSubtitleOff: 'オンにすると、選択したアプリをリモートでブロックできます。',
  toggleAccessibilityLabel: 'アプリブロックを有効にする',
  emptyTitle: 'ブロックされたアプリはありません',
  emptySubtitle:
    'お子さまのデバイスで「KidGate 設定 → ブロックするアプリを選択」を開き、保護者 PIN を入力して保存してください。',
  sectionTitle: 'ブロックリスト',
  privacyTitle: 'アプリ一覧はお子さまのデバイスから取得されます',
  privacySubtitle:
    'iOS では Apple の仕様により、保護者のデバイスでアプリ名が表示されない場合があります。その他のデバイスでは選択したアプリ名がここに同期されます。リストを変更するには、お子さまのデバイスで保護者 PIN が必要です。',
  infoTitle: '仕組み',
  infoLine1: '保護者 PIN を入力した後、お子さまのデバイスでアプリを選択します。',
  infoLine2:
    'ロック、休止時間、1日の上限では、引き続きすべてのアプリがブロックされます。',
  infoLine3: 'この画面からいつでもブロックのオン・オフを切り替えられます。',
  appKind: 'アプリ',
  categoryKind: 'カテゴリ',
  websiteKind: 'ウェブサイト',
  noAppsSelectedYet: 'まだアプリが選択されていません',
  blockedAppCount: '{{count}} 個のアプリ',
  blockedAppCount_one: '{{count}} 個のアプリ',
  blockedCategoryCount: '{{count}} 個のカテゴリ',
  blockedCategoryCount_one: '{{count}} 個のカテゴリ',
  blockedItemCount: '{{count}} 件',
  blockedItemCount_one: '{{count}} 件',
  blockedListReady: 'ブロックリストの準備ができました',
  blockedAppsLabel: 'ブロックされたアプリ',
  appsConfiguredChip: 'アプリ設定済み',
  appsNotSetChip: 'アプリ未設定',
  appBlockingSectionTitle: 'アプリブロック',
  appBlockingSectionDescription:
    '保護者がこのデバイスでブロックできるアプリを選択します。',
  savedItemsForBlocking: 'ブロック対象を {{count}} 件保存しました。',
  savedItemsForBlocking_one: 'ブロック対象を {{count}} 件保存しました。',
  noAppsSelected: 'アプリが選択されていません。',
  unableToOpenAppPicker: 'アプリ一覧を開けませんでした。もう一度お試しください。',
  wizardStepPin: '設定で求められたら保護者PINを入力します。',
  wizardStepChoose:
    '「ブロックするアプリを選択」を開き、アプリにチェックを入れて保存します。',
} as const;

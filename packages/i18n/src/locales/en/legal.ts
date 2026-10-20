export const legal = {
  privacyPolicy: {
    title: 'Privacy Policy',
    effectiveDate: 'Effective October 20, 2026',
    intro:
      'KidGate is the product and trading name under which the app is operated. This policy explains how KidGate handles data when parents use the service to manage a child’s device.\n\nIt covers the KidGate apps for iPhone, iPad and Android, the KidGate agent for macOS and Windows, the KidGate browser extension, the Android TV app, the parent dashboard, and the kidgate.app website.\n\n### Summary\n\n• KidGate processes data only for the features a parent switches on and the permissions the operating system grants.\n• Messages and searches are matched on the device itself. Only the matched keyword is sent, unless a parent has separately agreed to AI confirmation (section 3).\n• The Web Filter runs on the device. KidGate records domains, not full addresses or page contents.\n• There are no advertisements, and KidGate does not sell personal data.\n• Most activity history is deleted automatically after 30 days, SOS alerts after 90 days (section 11).\n• Authorized KidGate personnel open a family account only when support requires it, and every opening appears in that family’s activity feed (section 10).\n• A parent can request account deletion at any time. After a 14-day wait, the account and the family’s data are deleted, except for the minimal records described in sections 11 and 12.',
    sections: [
      {
        title: '1. Scope and parental authority',
        body: 'The parent account configures permissions and manages child devices. Children do not create their own KidGate accounts; a device is managed only through a parent account.\n\nA parent must have lawful guardianship or valid authority before monitoring or managing a device. KidGate must not be used for covert monitoring of adults or anyone outside the parent’s lawful care.',
      },
      {
        title: '2. Data we process',
        body: 'What KidGate processes depends on which features a parent switches on and which permissions the operating system grants. Not every kind of data below is collected on every device.\n\n### Account and devices\n\n• Account identifiers and the Google, Apple or email sign-in used to create the parent account.\n• The names a parent gives each child and the devices assigned to them.\n• Device name, model, form factor, operating-system and app version, battery level and pairing status.\n• The settings: Daily Limit, Blocked Hours, Blocked Apps, per-app limits, Web Filter categories and the Parent PIN. The PIN is stored only as a one-way hash.\n\n### Screen Time and apps\n\n• Screen Time totals, a per-app breakdown and a minute-level record of when the device was in use.\n• The apps installed on the device and the browser extensions added to it.\n• Alerts when a new app is installed, when a protection is switched off, or when use looks unusual, such as a new app or use during Blocked Hours.\n\n### Web and video\n\n• The domains a child device requested and which of them were blocked, counted by day and by hour.\n• Titles and channel names of videos played, where the platform makes them visible and video history is on.\n• Site-unblock requests and the information needed to handle them.\n\n### Location and safety\n\n• Device location, location history, the places a parent has saved and alerts when a device arrives at or leaves one of them.\n• SOS alerts, safety Check-Ins and the photo a child sends with either, and up to 15 seconds of sound recorded when a child sends an SOS from a phone or tablet whose microphone is allowed.\n• The name and email address of any trusted contact a parent adds, so that KidGate can email them each SOS.\n\n### Messages and searches\n\n• Alerts when a message or a search term matches a list a parent has turned on. How this works is described in section 3.\n\n### Reports, support and payments\n\n• Extra-time requests, reward tasks and the weekly star totals on the star chart.\n• The weekly report that summarizes the above.\n• Support messages and any screenshot attached to one.\n• Crash reports and technical diagnostics.\n• The subscription transaction data supplied by an app store.\n\nKidGate does not ask for a child’s real name where a feature does not need one.',
      },
      {
        title: '3. What stays on the child’s device',
        body: '### Message and search monitoring\n\nMessage monitoring runs on the Android device itself. Search monitoring runs on the Android device and in the KidGate browser extension. Both run only when a parent turns them on.\n\nThe device compares text against keyword lists held locally. When there is a match, what is sent is an alert naming the matched word or short phrase, its category, the app or search engine it appeared in and the time. The message or search itself, the rest of the conversation, and who it was with are not transmitted and are not stored by KidGate.\n\n### AI confirmation\n\nThis is the only exception, and it requires a separate consent from a parent. When it is on, an incoming message whose keyword match was ambiguous is sent to Google’s Gemini model to be judged, so that a parent is not alerted about an ordinary word. Before it is sent, email addresses, phone numbers and web addresses in the message are masked; the rest of the text is still sent and may still contain private information.\n\nKidGate keeps only the verdict and does not store the message once it has been judged. How Google Cloud handles the data it receives is described in section 5. Text the child writes is never sent for AI confirmation, whatever the family consented to.\n\n### Web and video\n\nKidGate records the domain a device asked for and whether it was blocked. It does not record the address of a page or its contents, except which video was played while video history is on. Files, photos and browsing that no enabled feature needs to read stay on the device.\n\n### Recording during an SOS\n\nThe microphone is used for one thing only: when a child sends an SOS from a phone or tablet whose microphone is allowed, up to 15 seconds of sound are recorded and sent with the alert. Nothing is recorded at any other time, nothing is listened to live, and no parent can start a recording remotely.\n\n### Web Filter and DNS\n\nOn iPhone, iPad, Android phones and Android TV, the Web Filter is a VPN that runs on the device itself. It routes no traffic through KidGate servers: it receives only the device’s website lookups, refuses the blocked ones, and passes the rest to a DNS resolver, which answers them.\n\n• On iPhone and iPad: the resolver of the network in use, Google Public DNS or Cloudflare’s 1.1.1.1.\n• On Android: the resolver of the network in use, or Google Public DNS when that resolver does not answer.\n\nOn a phone or tablet, before the VPN is first switched on, KidGate says what it sees and asks for permission. What the VPN observes is used only to filter and to show the family its web history; it is never sold, never used for any other purpose, and reaches only the providers in section 7, and only as far as running the service requires.',
      },
      {
        title: '4. How data is used',
        body: 'KidGate uses data to:\n\n• Authenticate accounts and pair devices.\n• Provide parental controls and sync settings across devices.\n• Send alerts, show activity history and produce reports.\n• Process subscriptions and transactions.\n• Protect accounts and prevent fraud or abuse.\n• Fix faults, support users and improve reliability.\n\nKidGate does not sell personal data and does not use child data for behavioral advertising. There are no advertisements in any KidGate app.',
      },
      {
        title: '5. Automated processing and AI',
        body: 'KidGate uses Google’s Gemini models, reached through Google Cloud, for three things:\n\n• The weekly report summary: a written summary generated from a family’s own usage figures.\n• Classifying apps and domains: sorting them into the categories the Web Filter and the app lists use. The result is kept in a shared table that records only a domain and its category, not which family visited it.\n• AI confirmation: judging some incoming messages whose keyword match was ambiguous, only where a parent has consented, as described in section 3.\n\nThese models can be wrong. A category, a summary sentence or a message alert is a prompt for a parent to look, not a finding of fact, and KidGate makes no decision with a legal or similarly significant effect on a child on the basis of one.\n\nUnder Google Cloud’s terms, Google does not use the data KidGate sends through this service to train its models. Google may still keep data temporarily under that service’s operational and security practices, so KidGate not storing a message does not mean every copy on the provider’s side disappears immediately.',
      },
      {
        title: '6. Legal grounds and consent',
        body: 'Depending on applicable law, KidGate processes data to provide requested services, meet legal duties, protect legitimate safety and security interests, or based on consent where required. Parents are responsible for giving required notices and obtaining the necessary consent for a child or device user.\n\nMessage monitoring and AI confirmation are two separate consents, each of which can be withdrawn at any time:\n\n• Message monitoring is switched on per device.\n• AI confirmation is agreed once for the family, and KidGate records who agreed and when.',
      },
      {
        title: '7. Service providers',
        body: 'KidGate uses the following providers to run the service. Each receives only what its task needs.\n\n• Google Cloud and Firebase: authentication, the database, file storage, the server functions, push notifications through Firebase Cloud Messaging, crash reporting through Firebase Crashlytics, and the Gemini models named in section 5.\n• Google Public DNS: on Android, iPhone and iPad, can answer the website lookups the Web Filter lets through, so it may receive those domain names.\n• Apple and Google: subscription purchases, renewals and refunds through their app stores.\n• Google Analytics: the measurement described in section 8.\n• HERE Technologies: turns a reported device position into an address and draws the map tiles on the location screens, so it receives the coordinates a device reported.\n• Resend: delivers the emails KidGate sends, including SOS alerts to trusted contacts and the weekly report.\n• Cloudflare: serves the desktop installers and, on iPhone and iPad, can answer the website lookups the Web Filter lets through, so it may receive those domain names.\n• unpkg: the content network that serves the map library to the parent apps.\n\nData is shared with these providers only as needed to provide, maintain and protect the service; with authorities where legally required; or to address safety risks, fraud or abuse. These providers have their own policies and duties for the data they process, and KidGate does not authorize any of them to use child data for their own marketing.',
      },
      {
        title: '8. Measurement and cookies',
        body: '### The kidgate.app website\n\nThe website measures, with Google Analytics, page visits and the number of clicks on each desktop download link. Analytics storage is declined by default, so no analytics cookie is set and nothing is stored in the reader’s browser; each visit is counted from a cookieless request with the IP address truncated. Google Signals and advertising identifiers are off, and KidGate sends nothing that identifies a reader or a family through this mechanism.\n\n### The KidGate apps\n\nThe KidGate apps send a small set of events to the same measurement property to show which features are used. These events carry an app-instance identifier. It is not the device’s advertising identifier, which the apps do not collect, but it still distinguishes one installation from another, so this data is not fully anonymous. The events never carry a child’s name, messages, location or browsing history.\n\nThe apps and the website use no advertising or tracking network of any kind.',
      },
      {
        title: '9. Where data is stored, and how it is protected',
        body: 'Family data is stored in Google Cloud’s Singapore region and may be processed elsewhere by the providers named in section 7, which means it may leave the country a family lives in.\n\nKidGate uses reasonable technical and organizational safeguards, including:\n\n• Access controls and least-privilege practices.\n• Server-side rules that scope every read to one family.\n• Secure transport.\n• The Parent PIN is stored only as a one-way hash and cannot be read back.\n\nNo system is completely secure; KidGate cannot guarantee that data will never be lost, accessed without authorization, or interrupted.',
      },
      {
        title: '10. Support access by KidGate personnel',
        body: '### When\n\nOnly where it is necessary to answer a support request or diagnose a fault, and only by personnel KidGate has authorized, signing in with two-factor authentication.\n\n### What they can see and do\n\nWhen they open a family account, they see exactly what a parent sees: its configuration and devices, and the activity within it, including location history, web history, message alerts and photos attached to an SOS or a Check-In. They can also change settings and issue device commands, as a parent can.\n\n### What is logged\n\n• Each time a family account is opened, a row is written into that family’s own activity feed, visible to its parents, with the time and the support ticket it relates to.\n• Each read of a family’s records through the operator tools is logged with the time and a stated reason.\n• Individual actions taken inside a support session, such as changing a setting or sending a command, are not separately logged today.',
      },
      {
        title: '11. How long data is kept',
        body: 'The periods below are KidGate’s own retention schedule. The providers in section 7 may process or keep data under their own terms.\n\n### Deleted automatically after a set period\n\n• 30 days: Screen Time and per-app usage, web history, video history, location history and the activity feed.\n• 90 days: SOS alerts and safety Check-Ins with their photos and sound recordings; extra-time requests.\n• 365 days: weekly reports.\n• 90 days after the request is resolved: support requests, replies and any screenshot attached to them.\n• 12 months after an account deletion is completed: a record that the deletion was requested and completed, containing only a hash of the email address and the dates, so that a disputed deletion can be looked into.\n\nPairing codes expire within minutes. A browser sign-in lasts 7 days when the app granted it, or 8 hours when the Parent PIN did.\n\n### Kept until the family account is deleted\n\nThe following have no separate expiry today:\n\n• The account and the family’s settings.\n• Saved places.\n• Child and device records.\n• Reward tasks.\n• Site-unblock requests.\n• The star chart and the weekly Screen Time history.\n• The list of installed apps and added browser extensions.\n\n### Exceptions\n\nSome minimal records may be kept longer where law, app-store transactions, a disputed deletion or fraud prevention requires it, and only to the extent that purpose needs.',
      },
      {
        title: '12. Deleting an account',
        body: 'A parent can request deletion in Settings, or by email to support@kidgate.app from the address on the account, as kidgate.app/delete-account explains.\n\nThe request holds for 14 days and can be canceled during that time. After 14 days, the family account, every child and device under it, and the stored files belonging to it are deleted, and the sign-in itself is removed. Deletion is permanent and there is no export afterwards.\n\nA completed deletion does not mean every related record disappears at once: the record confirming the deletion and the exceptions in section 11 are kept for the periods and to the extent stated there.',
      },
      {
        title: '13. Rights and choices',
        body: 'Depending on applicable law, users may request access, correction, deletion, restriction of or objection to processing, and may withdraw consent where processing is based on consent. Such requests, including for a copy of the data KidGate holds about a family, go to support@kidgate.app; there is no self-service export today.\n\nMessage monitoring and AI confirmation can be switched off at any time without affecting the rest of the service.\n\nLocation, notification, camera, microphone or device permissions can be revoked in the operating system. The features that rely on them will then stop or become incomplete, and KidGate reports this on the parent’s screen rather than showing a control that no longer works.',
      },
      {
        title: '14. Children’s data',
        body: 'KidGate processes child data only under the parent account’s configuration and direction, within the features a parent has switched on and the permissions granted. If child data was provided without required authority or consent, KidGate may restrict the account and delete the data after verification.',
      },
      {
        title: '15. Data incidents',
        body: 'When a security incident affecting data is confirmed, KidGate will assess it, take reasonable mitigation measures, and notify users or authorities when legally required. Parents must protect their accounts, PINs and devices, and promptly report suspected unauthorized access to KidGate.',
      },
      {
        title: '16. Changes and contact',
        body: 'This policy may change as features or laws change. Material updates will be communicated in the app or through an appropriate distribution channel.\n\nPrivacy requests and questions go to support@kidgate.app, the address also published on KidGate’s app-store listings.',
      },
    ],
  },
  termsOfService: {
    title: 'Terms of Service',
    effectiveDate: 'Effective September 6, 2026',
    intro:
      'By signing in to or using KidGate, you confirm that you have read and agree to these terms. KidGate is the product and trading name under which the service is operated.',
    sections: [
      {
        title: '1. Eligibility',
        body: 'You must be old enough to form a contract under applicable law and have lawful authority over every child, account, and device you manage. Do not use the service if you do not agree to these terms.',
      },
      {
        title: '2. What KidGate is, and what it is not',
        body: 'KidGate provides tools that help parents manage devices, set limits, view status, and receive alerts. It does not replace direct supervision, medical advice, emergency services, law enforcement, or professional child-safety services. SOS notifies you; it does not contact the emergency services, and it does not work where the device has no network.',
      },
      {
        title: '3. Software installed on a managed device',
        body: 'Enforcing a rule requires software on the device it applies to, and each platform grants it differently: Apple’s Screen Time framework on iPhone and iPad, an accessibility service and a device-admin grant on Android, an accessibility service on Android TV, a system extension and a background agent on macOS, a background service on Windows, and a browser extension in Chrome. You are installing this yourself, on a device you are entitled to manage, and you may remove it at any time from that device. Removing it, or withdrawing a permission it depends on, stops enforcement on that device — KidGate will tell you it has happened, but cannot prevent it.',
      },
      {
        title: '4. Parent responsibilities',
        body: 'You must give appropriate notice to children, obtain required consent, configure permissions correctly, test features, and comply with privacy, monitoring, employment, education, and child-protection laws. Message monitoring and AI confirmation are each a separate opt-in and are your decision to make, with the notice that decision requires in your jurisdiction. Do not use KidGate for covert monitoring, harassment, unlawful control, or infringement of another person’s rights.',
      },
      {
        title: '5. Account security and the Parent PIN',
        body: 'You are responsible for account activity and for protecting devices, PINs, and sign-in methods. The Parent PIN guards sensitive settings on a child device and cannot be recovered from a device — it is stored as a one-way hash. Promptly report suspected unauthorized access. KidGate may temporarily restrict accounts or devices to protect users or investigate abuse.',
      },
      {
        title: '6. Platform permissions and technical limits',
        body: 'Features depend on operating-system permissions, network access, battery state, manufacturer settings, location services, and third-party platforms, and what each platform allows differs. Some enforcement is best-effort by design — closing a blocked app on a computer rather than refusing to launch it — and KidGate states which on the screen that offers it. Alerts may be delayed, incomplete, or inaccurate. You must check devices directly and must not rely solely on KidGate for safety or emergencies.',
      },
      {
        title: '7. Plans, the trial and the free tier',
        body: 'A free trial with full access begins when your first parent and child devices are paired and runs for the period stated in the app. When it ends, the rules you configured keep working without payment on one child device — Daily Limit, Blocked Hours, Blocked Apps, per-app limits, the Web Filter, safe search, Device Lock, extra-time requests and reward tasks — and a parent can still ask that device for its current position a limited number of times a day. SOS is never behind payment. Live activity, history, weekly reports, the location trail, addresses, place alerts and message monitoring become part of Premium. Where a family has more child devices than the plan covers, the extra devices are paused: they keep enforcing the rules already set, those rules can be loosened but not tightened, and they stop sending activity. You choose which device stays monitored, and that choice can be changed once every seven days. Removing a child device does not restart the trial. A family may have a limited number of child devices paired at the same time; the number depends on the plan, and the app states it when it is reached.',
      },
      {
        title: '8. Subscriptions and payments',
        body: 'Purchases, renewals, cancellations, and refunds are handled under the terms of Apple App Store or Google Play, and a subscription can only be bought or restored from the KidGate app for iPhone, iPad or Android — a family whose devices are all computers, televisions or Chromebooks needs one of those to pay. One subscription covers the whole family and only the family owner can buy or restore it; a purchase attempted from another parent’s account is refused. Monthly and yearly plans renew automatically unless cancelled through the store at least 24 hours before the period ends. The one-time purchase does not renew, covers the number of child devices stated in the app, and lasts for as long as KidGate is offered; section 12 says what happens if that ends. Plan prices and features may change after notice required by law and store rules.',
      },
      {
        title: '9. Automated and AI-generated content',
        body: 'Weekly report summaries, the categories assigned to apps and websites, and the confirmation step in message monitoring are produced by automated models and can be wrong in both directions: a site may be filed in the wrong category, a summary may misstate a week, and an alert may fire on an innocent message or fail to fire on a harmful one. Treat all of it as a prompt to look rather than a finding, and do not rely on it as the sole basis for a decision about a child.',
      },
      {
        title: '10. License and ownership',
        body: 'KidGate grants a limited, personal, non-exclusive, non-transferable, revocable license to use the app under these terms. You may not resell, reverse engineer, defeat protections, automate extraction, or use branding, source code, or content beyond what law permits.',
      },
      {
        title: '11. Prohibited conduct',
        body: 'Do not compromise systems, distribute malware, impersonate others, access unauthorized data, overload services, bypass limits, cause harm, or break the law. KidGate may restrict or terminate access when it reasonably believes a violation occurred.',
      },
      {
        title: '12. Availability and changes',
        body: 'The service may change, pause, or end because of maintenance, security, platform changes, law, or operations. KidGate may be discontinued; if that happens, active subscriptions and the one-time purchase are handled under the applicable app-store rules — the one-time purchase buys the service for as long as it is offered, not a promise that it will be offered forever. KidGate aims for reasonable availability but does not promise uninterrupted, error-free operation or compatibility with every device.',
      },
      {
        title: '13. Disclaimers',
        body: 'To the extent permitted by law, the service is provided “as is” and “as available,” without implied warranties of merchantability, fitness, accuracy, or non-infringement. Nothing excludes mandatory consumer rights or liability that law does not allow to be excluded.',
      },
      {
        title: '14. Limitation of liability',
        body: 'To the extent permitted by law, KidGate is not liable for indirect, incidental, special, punitive, data-loss, profit, or opportunity damages arising from use or inability to use the service. Aggregate liability for service-related claims will not exceed the amount paid to KidGate during the 12 months before the event, unless law requires otherwise.',
      },
      {
        title: '15. Indemnity',
        body: 'To the extent permitted by law, you agree to indemnify KidGate against third-party claims caused by unlawful use, unauthorized monitoring, infringement of another person’s rights, or breach of these terms. This does not cover harm legally attributable directly to KidGate.',
      },
      {
        title: '16. Termination and disputes',
        body: 'You may stop using the service and request account deletion. Deletion holds for 14 days and can be canceled in that window; after it, the family account and its data are removed permanently. KidGate may suspend or terminate service for violations, safety risks, or legal demands. Parties should first try in good faith to resolve disputes, starting with an email to support@kidgate.app. These terms are governed by the laws of Vietnam and disputes go to the competent courts of Vietnam, except where the mandatory consumer-protection rules of the country you live in give you the right to a different law or court.',
      },
      {
        title: '17. General',
        body: 'If any provision is found unenforceable, the remaining provisions stay in effect. Failure to enforce a provision is not a waiver of it. These terms, together with the Privacy Policy and any store terms, are the entire agreement about the service. KidGate may assign these terms as part of a transfer of the app; your rights under mandatory law are not affected.',
      },
      {
        title: '18. Third-party software',
        body: 'KidGate bundles two typefaces, both used under the SIL Open Font License 1.1: Plus Jakarta Sans by Tokotype and Baloo 2 by Ek Type. Baloo 2’s vertical metrics are re-cut for this app’s line heights; the outlines and the family name are unchanged, and the license permits that modification. Neither typeface is sold on its own. Sources and license:',
        links: [
          {
            label: 'Plus Jakarta Sans on GitHub',
            url: 'https://github.com/tokotype/PlusJakartaSans',
          },
          {
            label: 'Baloo 2 on GitHub',
            url: 'https://github.com/EkType/Baloo2',
          },
          {
            label: 'SIL Open Font License 1.1',
            url: 'https://scripts.sil.org/OFL',
          },
        ],
      },
      {
        title: '19. Changes and contact',
        body: 'These terms may be updated. Material changes will be communicated appropriately; continued use after the effective date accepts updated terms where law permits. Questions go to support@kidgate.app.',
      },
    ],
  },
} as const;

export const legal = {
  privacyPolicy: {
    title: 'Privacy Policy',
    effectiveDate: 'Effective September 6, 2026',
    intro:
      'KidGate is the product and trading name used by the independent developer who operates the app. This policy explains how KidGate handles data when parents use the service to manage a child’s device. It covers the KidGate apps for iPhone, iPad and Android, the KidGate agent for macOS and Windows, the KidGate browser extension, the Android TV app, the parent dashboard, and the kidgate.app website.',
    sections: [
      {
        title: '1. Scope and parental authority',
        body: 'The parent account configures permissions and manages child devices. Children do not create their own KidGate accounts; a device is managed only through a parent account. A parent must have lawful guardianship or valid authority before monitoring or managing a device. KidGate must not be used for covert monitoring of adults or anyone outside the parent’s lawful care.',
      },
      {
        title: '2. Data we process',
        body: 'What KidGate processes depends on which features a parent switches on and which permissions the operating system grants. It may include: account identifiers and the Google, Apple or email sign-in used to create the parent account; the names a parent gives each child and the devices assigned to them; device name, model, form factor, operating-system and app version, battery level and pairing status; the settings themselves — Daily Limit, Blocked Hours, Blocked Apps, per-app limits, Web Filter categories and the Parent PIN, which is stored only as a one-way hash; Screen Time totals, a per-app breakdown and a minute-level record of when the device was in use; the apps installed on the device and the browser extensions added to it; the domains a child device requested and which of them the Web Filter refused, counted by day and by hour; titles of videos played where the platform makes them visible; location, location history and the places a parent has saved; SOS alerts, safety Check-Ins and the photo a child sends with either; alerts raised when a protection is switched off, when an app is installed, or when a message or a search matched a keyword list a parent enabled; extra-time requests, site-unblock requests, reward tasks and the weekly star totals shown on the star chart; the weekly report that summarises the above; support messages and any screenshot attached to one; crash reports and technical diagnostics; and the subscription transaction data supplied by an app store. KidGate does not ask for a child’s real name where a feature does not need one.',
      },
      {
        title: '3. What stays on the child’s device',
        body: 'Message and search monitoring runs on the device itself, on Android only, and only when a parent turns it on. The device compares text against keyword lists held locally; what is sent is an alert naming the matched word, its category, the app it appeared in and the time. The message itself, the rest of the conversation, and who it was with are not transmitted and are not stored by KidGate. There is one exception, and it is a separate consent: where a parent has additionally agreed to AI confirmation, an incoming message whose keyword match was ambiguous is sent to Google’s Gemini model to be judged, so that a parent is not alerted about an ordinary word. Text the child writes is never sent for AI confirmation, whatever the family consented to. Outside that path, KidGate records the domain a device asked for and whether it was refused — not the address of a page or its contents — and files, photos and browsing that no enabled feature reads stay on the device.',
      },
      {
        title: '4. How data is used',
        body: 'Data supports authentication, device pairing, parental controls, settings sync, alerts, reports, subscriptions, fraud prevention, account security, troubleshooting, and reliability. KidGate does not sell personal data and does not use child data for behavioral advertising. There are no advertisements in any KidGate app.',
      },
      {
        title: '5. Automated processing and AI',
        body: 'Three features use Google’s Gemini models, reached through Google Cloud: the weekly report’s written summary, which is generated from a family’s own usage figures; the classification of apps and website domains into categories the Web Filter and the app lists use; and the confirmation step described in section 3, which runs only where a parent has consented to it. These models produce judgements that can be wrong. A category, a summary sentence or a message alert is a prompt to look, not a finding of fact, and KidGate makes no decision with a legal or similarly significant effect on a child on the basis of one. Model output is not used to train Google’s models.',
      },
      {
        title: '6. Legal grounds and consent',
        body: 'KidGate processes data to provide requested services, meet legal duties, protect legitimate safety and security interests, or based on consent where required. Parents are responsible for giving required notices and obtaining valid consent for a child or device user. Message monitoring and AI confirmation are each a separate, explicit opt-in, recorded per device and revocable at any time.',
      },
      {
        title: '7. Service providers',
        body: 'KidGate is built on Google Cloud and Firebase, which provide authentication, the database, file storage, the server functions, push notifications through Firebase Cloud Messaging, crash reporting through Firebase Crashlytics, and the Gemini models named in section 5. Apple and Google also process subscription purchases, renewals and refunds through their app stores, and Google Analytics processes the measurement described in section 8. Data is disclosed to these providers only as needed to run the service; to authorities where legally required; or to address safety, fraud, or abuse. Providers have their own duties and policies, and none is authorized by KidGate to use child data for independent marketing.',
      },
      {
        title: '8. Website analytics and cookies',
        body: 'The kidgate.app website measures three things with Google Analytics: page visits, and clicks on each of the two desktop download links. That measurement sets an analytics cookie in the reader’s browser. IP addresses are truncated, Google Signals and advertising identifiers are off, and nothing identifying a reader or a family is sent. The KidGate apps report a small set of events to the same property to show which features are used; those events carry an app-instance identifier and never a child’s name, message, location or browsing. The apps and the website use no advertising or tracking network of any kind.',
      },
      {
        title: '9. Where data is stored, and how it is protected',
        body: 'Family data is stored in Google Cloud’s Singapore region and may be processed elsewhere by the providers named in section 7, which means it may leave the country a family lives in. KidGate uses reasonable technical and organizational safeguards, including access controls, least-privilege practices, server-side rules that scope every read to one family, and secure transport. The Parent PIN is stored only as a one-way hash and cannot be read back. No system is completely secure; KidGate cannot guarantee that data will never be lost, accessed without authorization, or interrupted.',
      },
      {
        title: '10. Support access by KidGate personnel',
        body: 'Where it is necessary to answer a support request or diagnose a fault, authorised KidGate personnel can open a family account and see what a parent sees: its configuration and devices, and the activity within it — including location history, web history, message alerts and photos attached to an SOS or a Check-In. They can also change settings and issue device commands. Such access is limited to authorised personnel, requires two-factor authentication, is used solely for support, and every entry into a family account is logged with the time and the stated reason. Individual actions taken during a support session are not separately logged today.',
      },
      {
        title: '11. How long data is kept',
        body: 'Records expire on a schedule and are deleted automatically: Screen Time and per-app usage, web history, video history, location history and the activity feed after 30 days; SOS alerts, safety Check-Ins and extra-time requests after 90 days; weekly reports after 365 days. Pairing codes expire within minutes and a browser sign-in lasts 7 days. Some records have no expiry today and are kept until the family account is deleted: the account and its settings, saved places, child and device records, reward tasks, site-unblock requests, the star chart and the weekly Screen Time history, and the list of apps installed on each device. Support messages and any screenshot attached to one are kept indefinitely and are not removed by account deletion; closing that gap is planned. Limited records may also remain where required for law, fraud prevention, rotating backups, or app-store transactions.',
      },
      {
        title: '12. Deleting an account',
        body: 'A parent can request deletion in Settings or from kidgate.app. The request holds for 14 days and can be cancelled during that time; after it, the family account, every child and device under it, and the stored files belonging to it are deleted, and the sign-in itself is removed. Deletion is permanent and there is no export afterwards. The support records named in section 11 are the exception and survive it.',
      },
      {
        title: '13. Rights and choices',
        body: 'Depending on applicable law, users may request access, correction, deletion, restriction, objection, or withdrawal of consent. Message monitoring and AI confirmation can be switched off at any time without affecting the rest of the service. Location, notification, camera and device permissions can be disabled in the operating system, but the features that rely on them will stop or become incomplete, and KidGate reports on the parent’s screen when that has happened rather than showing a control that no longer works.',
      },
      {
        title: '14. Children’s data',
        body: 'KidGate processes child data only under the parent account’s configuration and direction. If child data was provided without required authority or consent, KidGate may restrict the account and delete the data after verification.',
      },
      {
        title: '15. Data incidents',
        body: 'KidGate will assess confirmed security incidents, take reasonable mitigation measures, and notify users or authorities when legally required. Parents must protect accounts, PINs, and devices and promptly report suspected unauthorized access.',
      },
      {
        title: '16. Changes and contact',
        body: 'This policy may change as features or laws change. Material updates will be communicated in the app or through an appropriate distribution channel. Privacy requests may be submitted through the support channel published on KidGate’s app-store listing.',
      },
    ],
  },
  termsOfService: {
    title: 'Terms of Service',
    effectiveDate: 'Effective September 6, 2026',
    intro:
      'By signing in to or using KidGate, you confirm that you have read and agree to these terms. KidGate is the product and trading name used by the independent developer who operates the service.',
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
        body: 'Enforcing a rule requires software on the device it applies to, and each platform grants it differently: Apple’s Screen Time framework on iPhone and iPad, an accessibility service and a device-admin grant on Android, a system extension and a background agent on macOS, a background service on Windows, and a browser extension in Chrome. You are installing this yourself, on a device you are entitled to manage, and you may remove it at any time from that device. Removing it, or withdrawing a permission it depends on, stops enforcement on that device — KidGate will tell you it has happened, but cannot prevent it.',
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
        body: 'A free trial with full access begins when your first parent and child devices are paired and runs for the period stated in the app. When it ends, the rules you configured keep working without payment on one child device — Daily Limit, Blocked Hours, Blocked Apps, the Web Filter, Device Lock, extra-time requests and reward tasks — while live activity, history, weekly reports and location tracking become part of Premium. Where a family has more child devices than the plan covers, the extra devices are paused: they keep enforcing the rules already set and stop sending activity, and you choose which device stays monitored. Removing a child device does not restart the trial, and a family may pair a limited number of child devices over the life of the account.',
      },
      {
        title: '8. Subscriptions and payments',
        body: 'Purchases, renewals, cancellations, and refunds are handled under the terms of Apple App Store, Google Play, or the relevant payment provider. One subscription covers the whole family and only the family owner pays. Plan prices and features may change after notice required by law and store rules.',
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
        body: 'The service may change, pause, or end because of maintenance, security, platform changes, law, or operations. KidGate is operated by an independent developer and may be discontinued; if that happens, active subscriptions are handled under the applicable app-store rules. KidGate aims for reasonable availability but does not promise uninterrupted, error-free operation or compatibility with every device.',
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
        body: 'You may stop using the service and request account deletion. Deletion holds for 14 days and can be cancelled in that window; after it, the family account and its data are removed permanently. KidGate may suspend or terminate service for violations, safety risks, or legal demands. Parties should first try in good faith to resolve disputes; governing law and courts are determined by mandatory rules applicable to the user and operator.',
      },
      {
        title: '17. General',
        body: 'If any provision is found unenforceable, the remaining provisions stay in effect. Failure to enforce a provision is not a waiver of it. These terms, together with the Privacy Policy and any store terms, are the entire agreement about the service. KidGate may assign these terms as part of a transfer of the app; your rights under mandatory law are not affected.',
      },
      {
        title: '18. Third-party software',
        body: 'KidGate bundles two typefaces, both used under the SIL Open Font License 1.1: Plus Jakarta Sans by Tokotype and Baloo 2 by Ek Type. Baloo 2’s vertical metrics are re-cut for this app’s line heights; the outlines and the family name are unchanged, and the licence permits that modification. Neither typeface is sold on its own. Sources and licence:',
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
        body: 'These terms may be updated. Material changes will be communicated appropriately; continued use after the effective date accepts updated terms where law permits. Questions may be submitted through the support channel on KidGate’s app-store listing.',
      },
    ],
  },
} as const;

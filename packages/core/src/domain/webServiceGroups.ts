/**
 * The service a domain belongs to, so a parent reads one row instead of five.
 *
 * A DNS filter sees a service's whole back end. Opening YouTube once produces
 * `youtube.com`, `googlevideo.com`, `ytimg.com` and `ggpht.com`, and a parent
 * looking for "what did my child watch" has to know which of those four is the
 * site and which three are plumbing. The infrastructure table
 * (`WEB_NOISE_DOMAINS`) drops the CDNs nobody chose; this one collects the ones
 * that belong to something the child *did* choose.
 *
 * **This is presentation, never enforcement.** Grouping happens where the rows
 * are read, on the parent's phone and in the dashboard — the recorded documents
 * stay one row per domain, so an existing history regroups the moment this
 * ships, an iPhone's rows group the same way an Android's do, and getting an
 * entry wrong costs a mislabelled row rather than a site a child can reach.
 * Nothing here may be wired into `webFilterVerdict`: a table that decided
 * blocking too would mean adding `googlevideo.com` here quietly opened YouTube
 * in allow-list-only mode.
 *
 * **Two domains minimum.** A service reachable at a single registrable domain
 * gains nothing from a group that says "1 site", and every entry here is a name
 * somebody has to keep true as brands move hosts. Single-domain services are
 * deliberately absent, and the screens render an ungrouped domain exactly as
 * they did before.
 *
 * Names are brands, so they are **not** translated and do not belong in
 * `packages/i18n` — "YouTube" is "YouTube" in all fourteen locales. The copy
 * around them (the site count, the visit count) does go through i18n.
 */

import type { WebFilterCategory, WebHistoryEntry } from '@kidgate/schema/webActivity';
import { canonicalWebHost } from './webFilterCategoryDomains';
import { webHistoryCategory } from './webHistoryLabel';

export interface WebService {
  /** Stable key, used for React keys and tests. Never shown to anyone. */
  id: string;
  /** The brand, spelled as the brand spells it. Not a translated string. */
  name: string;
  /** Registrable domains this service reaches. Subdomains match. */
  domains: readonly string[];
}

export const WEB_SERVICES: readonly WebService[] = [
  {
    id: 'youtube',
    name: 'YouTube',
    domains: ['youtube.com', 'youtu.be', 'googlevideo.com', 'ytimg.com', 'ggpht.com'],
  },
  {
    id: 'netflix',
    name: 'Netflix',
    domains: [
      'netflix.com',
      'nflxvideo.net',
      'nflximg.net',
      'nflxext.com',
      'nflxso.net',
    ],
  },
  {
    id: 'spotify',
    name: 'Spotify',
    domains: ['spotify.com', 'scdn.co', 'spotifycdn.com'],
  },
  {
    id: 'soundcloud',
    name: 'SoundCloud',
    domains: ['soundcloud.com', 'sndcdn.com'],
  },
  {
    id: 'deezer',
    name: 'Deezer',
    domains: ['deezer.com', 'dzcdn.net'],
  },
  {
    id: 'zingmp3',
    name: 'Zing MP3',
    domains: ['zingmp3.vn', 'zmdcdn.me'],
  },
  {
    id: 'nhaccuatui',
    name: 'NhacCuaTui',
    domains: ['nhaccuatui.com', 'nixcdn.com'],
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    domains: [
      'tiktok.com',
      'tiktokcdn.com',
      'tiktokv.com',
      'ibytedtos.com',
      'musical.ly',
    ],
  },
  {
    id: 'facebook',
    name: 'Facebook',
    domains: ['facebook.com', 'fbcdn.net', 'fb.com', 'messenger.com'],
  },
  {
    id: 'instagram',
    name: 'Instagram',
    domains: ['instagram.com', 'cdninstagram.com'],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    domains: ['whatsapp.com', 'whatsapp.net'],
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    domains: ['snapchat.com', 'snap.com', 'sc-cdn.net'],
  },
  {
    id: 'discord',
    name: 'Discord',
    domains: ['discord.com', 'discordapp.com', 'discordapp.net', 'discord.gg'],
  },
  {
    id: 'roblox',
    name: 'Roblox',
    domains: ['roblox.com', 'rbxcdn.com'],
  },
  {
    id: 'twitch',
    name: 'Twitch',
    domains: ['twitch.tv', 'ttvnw.net', 'jtvnw.net', 'twitchcdn.net'],
  },
  {
    id: 'reddit',
    name: 'Reddit',
    domains: ['reddit.com', 'redd.it', 'redditmedia.com', 'redditstatic.com'],
  },
  {
    id: 'x',
    name: 'X',
    domains: ['x.com', 'twitter.com', 'twimg.com', 't.co'],
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    domains: ['pinterest.com', 'pinimg.com'],
  },
  {
    id: 'telegram',
    name: 'Telegram',
    domains: ['telegram.org', 'telegram.me', 't.me', 'cdn-telegram.org'],
  },
  {
    id: 'zalo',
    name: 'Zalo',
    domains: ['zalo.me', 'zaloapp.com', 'zdn.vn'],
  },
  {
    id: 'shopee',
    name: 'Shopee',
    domains: ['shopee.vn', 'shopee.com', 'shopeemobile.com'],
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    domains: ['minecraft.net', 'minecraftservices.com', 'mojang.com'],
  },
  {
    id: 'steam',
    name: 'Steam',
    domains: [
      'steampowered.com',
      'steamcommunity.com',
      'steamstatic.com',
      'steamcontent.com',
    ],
  },
  {
    id: 'epicgames',
    name: 'Epic Games',
    domains: ['epicgames.com', 'fortnite.com', 'unrealengine.com'],
  },
  {
    id: 'disneyplus',
    name: 'Disney+',
    domains: ['disneyplus.com', 'disney-plus.net', 'bamgrid.com', 'dssott.com'],
  },
  {
    id: 'primevideo',
    name: 'Prime Video',
    domains: ['primevideo.com', 'aiv-cdn.net', 'aiv-delivery.net'],
  },
  {
    id: 'google',
    name: 'Google',
    domains: [
      'google.com',
      'google.com.vn',
      'googledrive.com',
      'gvt1.com',
      'cloudfunctions.net',
      'firebaseapp.com',
      'appspot.com',
    ],
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    domains: [
      'microsoft.com',
      'live.com',
      'office.com',
      'windows.com',
      'outlook.com',
      'office365.com',
      'azure.com',
      'cloud.microsoft',
      'trafficmanager.net',
    ],
  },
  {
    id: 'xbox',
    name: 'Xbox',
    domains: ['xbox.com', 'xboxlive.com'],
  },
  {
    id: 'apple',
    name: 'Apple',
    domains: ['apple.com', 'icloud.com', 'apple-dns.net', 'apple-cloudkit.com'],
  },
  {
    id: 'amazon',
    name: 'Amazon',
    domains: ['amazon.com', 'amazonaws.com', 'aws.amazon.com'],
  },
  {
    id: 'github',
    name: 'GitHub',
    domains: ['github.com', 'githubusercontent.com', 'github.io'],
  },
  {
    id: 'zoom',
    name: 'Zoom',
    domains: ['zoom.us', 'zoomgov.com'],
  },
  {
    id: 'wikipedia',
    name: 'Wikipedia',
    domains: ['wikipedia.org', 'wikimedia.org'],
  },
];

/** Every domain in the table, pointing at its service. Built once. */
const SERVICE_BY_DOMAIN = new Map<string, WebService>();
for (const service of WEB_SERVICES) {
  for (const domain of service.domains) {
    SERVICE_BY_DOMAIN.set(domain, service);
  }
}

/**
 * The service that claims `hostname`, or null.
 *
 * Matches a domain or any subdomain of one, walking the labels the way
 * `matchesSet` does in `webFilterCategoryDomains` — history rows arrive already
 * collapsed to a registrable domain, but a caller holding a full hostname
 * should get the same answer.
 */
export function webServiceFor(hostname: string): WebService | null {
  const host = canonicalWebHost(hostname);
  if (!host) {
    return null;
  }
  const direct = SERVICE_BY_DOMAIN.get(host);
  if (direct) {
    return direct;
  }
  let index = host.indexOf('.');
  while (index >= 0 && index < host.length - 1) {
    const parent = SERVICE_BY_DOMAIN.get(host.slice(index + 1));
    if (parent) {
      return parent;
    }
    index = host.indexOf('.', index + 1);
  }
  return null;
}

/** One service's day, or one domain that belongs to no service. */
export interface WebHistoryGroup {
  /** Service id, or the domain itself when no service claims it. */
  key: string;
  /** The brand name, or the domain. Already display-ready. */
  label: string;
  /** Null for an ungrouped domain — the screens render those as they always did. */
  service: WebService | null;
  /** The rows behind this group, most-visited first. Never empty. */
  entries: WebHistoryEntry[];
  visits: number;
  blockedVisits: number;
  /** The first category any row carried, or null. */
  category: WebFilterCategory | null;
  /** The most recent lookup across the group. */
  lastAt: string;
}

/**
 * Fold one day's rows into service groups, most-visited first.
 *
 * A group of one is left as a plain domain even when a service claims it: a
 * child who only ever reached `youtube.com` is described exactly as well by
 * that row, and relabelling it "YouTube" would hide the domain for no gain.
 * The screens rely on this — they render a one-entry group with the domain
 * copy they used before groups existed.
 */
export function groupWebHistoryByService(
  entries: readonly WebHistoryEntry[],
): WebHistoryGroup[] {
  const byKey = new Map<string, WebHistoryGroup>();

  for (const entry of entries) {
    const service = webServiceFor(entry.domain);
    const key = service ? service.id : entry.domain;
    const group = byKey.get(key);
    if (group) {
      group.entries.push(entry);
      group.visits += entry.visits;
      group.blockedVisits += entry.blockedVisits;
      group.category = group.category ?? webHistoryCategory(entry);
      if (entry.lastAt > group.lastAt) {
        group.lastAt = entry.lastAt;
      }
      continue;
    }
    byKey.set(key, {
      key,
      label: service ? service.name : entry.domain,
      service,
      entries: [entry],
      visits: entry.visits,
      blockedVisits: entry.blockedVisits,
      category: webHistoryCategory(entry),
      lastAt: entry.lastAt,
    });
  }

  const groups = [...byKey.values()];
  for (const group of groups) {
    if (group.entries.length === 1) {
      // A lone row is a domain, not a brand — see the doc comment.
      group.label = group.entries[0]!.domain;
      continue;
    }
    group.entries.sort(
      (a, b) => b.visits - a.visits || a.domain.localeCompare(b.domain),
    );
  }
  return groups.sort((a, b) => b.visits - a.visits || a.label.localeCompare(b.label));
}

/** One kind of site within one day, holding the service groups under it. */
export interface WebHistorySection {
  /** The category, or null for rows the device classified as nothing. */
  category: WebFilterCategory | null;
  groups: WebHistoryGroup[];
  visits: number;
  blockedVisits: number;
}

/**
 * Fold one day's rows into sections by kind of site, most-visited first, with
 * the unclassified rows last.
 *
 * `domain` is the wrong unit for the question a parent actually has. Nobody
 * knows what `scdn.co` is; everybody knows what "music" is. Categories are the
 * vocabulary the Web Filter screen already uses, so the two screens name the
 * same things the same way — and a parent who reads a section here can act on
 * it with the switch they have already seen.
 *
 * Sectioning happens on the entries and grouping happens inside each section,
 * not the other way round: a service that spans two categories belongs in both,
 * and folding first would have silently filed it under whichever row arrived
 * first.
 *
 * The null section is real and load-bearing, not a leftover. iOS classifies
 * nothing at all, so an iPhone's whole day lands there — callers should notice
 * a lone null section and render the rows as they would have without sections,
 * rather than charging a tap for a heading that says nothing.
 */
export function sectionWebHistoryByCategory(
  entries: readonly WebHistoryEntry[],
): WebHistorySection[] {
  const byCategory = new Map<string, WebHistoryEntry[]>();
  for (const entry of entries) {
    const key = webHistoryCategory(entry) ?? '';
    const bucket = byCategory.get(key);
    if (bucket) {
      bucket.push(entry);
    } else {
      byCategory.set(key, [entry]);
    }
  }

  const sections: WebHistorySection[] = [];
  for (const [key, sectionEntries] of byCategory) {
    const groups = groupWebHistoryByService(sectionEntries);
    sections.push({
      category: key === '' ? null : (key as WebFilterCategory),
      groups,
      visits: groups.reduce((total, group) => total + group.visits, 0),
      blockedVisits: groups.reduce((total, group) => total + group.blockedVisits, 0),
    });
  }

  return sections.sort((a, b) => {
    if (a.category === null) return 1;
    if (b.category === null) return -1;
    return b.visits - a.visits || a.category.localeCompare(b.category);
  });
}

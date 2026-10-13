/**
 * The domains a site cannot load without, written beside it when a parent
 * allows it.
 *
 * A filter decides one hostname at a time, so allowing `roblox.com` opened the
 * page and left its scripts and styles on `rbxcdn.com` — filed under Games
 * beside it — refused: a blank white page for minutes, on a site the parent
 * believed they had allowed (prod, 2026-10-13). Allowing `youtube.com` left
 * `googlevideo.com` and `ytimg.com` behind in the same way.
 *
 * **Read where an allow list is written, never where a verdict is made.**
 * Approving a site request (`functions/http/siteRequests.js`, through the
 * codegen bridge) and adding a site to Always allow by hand append the
 * companions as ordinary entries, visible and removable in the list the parent
 * already edits. Every verdict — `webFilterVerdict`, `KidGateWebPolicy.kt`,
 * `PolicyEngine.swift`, `dnsrules.rs`, `KidGateTvWebRules.kt`, the extension's
 * rules — sees entries and never this table, so an edit here changes the next
 * allow and no list already stored.
 *
 * **One direction.** A key is a site a person opens; its values are plumbing
 * that opens nothing on its own. Allowing `googlevideo.com` adds nothing —
 * otherwise a child asking for a CDN they saw refused would be handed YouTube,
 * which is the allow-list-only hole `webServiceGroups` warns about.
 *
 * **Single-tenant only.** A value is reachable for every site that uses it, so
 * shared hosting (`appspot.com`, `amazonaws.com`, `github.io`,
 * `githubusercontent.com`, `trafficmanager.net`) never appears. That is why
 * Google, Amazon, Microsoft and GitHub, grouped in `webServiceGroups` for
 * history, have no row here.
 *
 * Every value is a domain `WEB_SERVICES` already files under the key's service;
 * the test holds the two tables together. No imports: this crosses into
 * `functions/lib/generated`, and an import would carry its table with it.
 */
export const WEB_SITE_COMPANIONS: ReadonlyMap<string, readonly string[]> = new Map([
  [
    'youtube.com',
    [
      'youtu.be',
      'googlevideo.com',
      'ytimg.com',
      'ggpht.com',
      'youtubei.googleapis.com',
    ],
  ],
  ['netflix.com', ['nflxvideo.net', 'nflximg.net', 'nflxext.com', 'nflxso.net']],
  ['spotify.com', ['scdn.co', 'spotifycdn.com']],
  ['soundcloud.com', ['sndcdn.com']],
  ['deezer.com', ['dzcdn.net']],
  ['zingmp3.vn', ['zmdcdn.me']],
  ['nhaccuatui.com', ['nixcdn.com']],
  ['tiktok.com', ['tiktokcdn.com', 'tiktokv.com', 'ibytedtos.com']],
  ['facebook.com', ['fbcdn.net']],
  ['messenger.com', ['fbcdn.net']],
  ['instagram.com', ['cdninstagram.com']],
  ['whatsapp.com', ['whatsapp.net']],
  ['snapchat.com', ['sc-cdn.net']],
  ['discord.com', ['discordapp.com', 'discordapp.net']],
  ['roblox.com', ['rbxcdn.com']],
  ['twitch.tv', ['ttvnw.net', 'jtvnw.net', 'twitchcdn.net']],
  ['reddit.com', ['redd.it', 'redditmedia.com', 'redditstatic.com']],
  ['x.com', ['twimg.com']],
  ['twitter.com', ['twimg.com']],
  ['pinterest.com', ['pinimg.com']],
  ['telegram.org', ['cdn-telegram.org']],
  ['zalo.me', ['zaloapp.com', 'zdn.vn']],
  ['steampowered.com', ['steamstatic.com']],
  ['steamcommunity.com', ['steamstatic.com']],
  ['disneyplus.com', ['disney-plus.net', 'bamgrid.com', 'dssott.com']],
  ['primevideo.com', ['aiv-cdn.net', 'aiv-delivery.net']],
  ['wikipedia.org', ['wikimedia.org']],
]);

/**
 * What allowing `domain` also allows: the companions of the site it is, or of
 * the site it is a subdomain of (`music.youtube.com` needs YouTube's). Empty
 * for anything else. `domain` is already normalised (`normalizeWebDomain`).
 */
export function webSiteCompanions(domain: string): readonly string[] {
  let host = domain;
  while (host) {
    const companions = WEB_SITE_COMPANIONS.get(host);
    if (companions) {
      return companions;
    }
    const dot = host.indexOf('.');
    host = dot < 0 ? '' : host.slice(dot + 1);
  }
  return [];
}

/**
 * `list` with `domain` and each of its companions appended once, order kept.
 * Adds companions even when `domain` is already listed, so allowing a site
 * again repairs a list written before this table existed.
 */
export function withWebSite(list: readonly string[], domain: string): string[] {
  const next = [...list];
  for (const entry of [domain, ...webSiteCompanions(domain)]) {
    if (!next.includes(entry)) {
      next.push(entry);
    }
  }
  return next;
}

/**
 * `list` without `domain`, and without each of its companions no remaining
 * site still needs. Leaving them would keep the service half open:
 * `googlevideo.com`, `ytimg.com` and `youtubei.googleapis.com` without
 * `youtube.com` still run the YouTube app. A companion removed on its own is
 * just removed — the parent chose it.
 */
export function withoutWebSite(list: readonly string[], domain: string): string[] {
  const rest = list.filter(entry => entry !== domain);
  const stillNeeded = new Set(rest.flatMap(entry => webSiteCompanions(entry)));
  const orphans = new Set(
    webSiteCompanions(domain).filter(companion => !stillNeeded.has(companion)),
  );
  return rest.filter(entry => !orphans.has(entry));
}

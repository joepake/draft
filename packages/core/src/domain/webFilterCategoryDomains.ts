/**
 * Domain tables and matching rules behind the web filter's content categories.
 *
 * The same data exists in Kotlin — `KidGateWebCategories`, `KidGateWebNoise`
 * and `KidGateRegistrableDomain` in `apps/mobile/android` — because the DNS
 * tunnel enforces on the packet thread and cannot import TypeScript. That copy
 * is the original; this module is its platform-free twin, created when the
 * macOS content filter needed the tables and a third hand-kept copy (in Swift)
 * was the alternative. The Mac provider ships **no tables at all**: it receives
 * this module's data at runtime inside `ContentFilterRules`, so the Swift side
 * cannot drift. The Kotlin side still can, which is why
 * `webFilterCategoryDomainsParity.test.ts` reads the three Kotlin objects as
 * text and compares every set in both directions — the mirror rule 2 of the
 * root CLAUDE.md forbids without a test.
 *
 * Matching semantics, shared by all three platforms:
 *
 * - A hostname matches a domain set when it equals an entry or is a subdomain
 *   of one (`matchesDomainSet`).
 * - **Three passes per category, narrowest first**, so the reason a host was
 *   claimed is the most specific one available: its domains, then its exact
 *   DNS labels, then fragments matched anywhere in the hostname
 *   (`WEB_FILTER_SUBSTRINGS_BY_CATEGORY`). A label is a whole label, which is
 *   why `porn` there matches `porn.com` and not `free-pornhat.cfd`; the
 *   fragment pass is what catches the second, and the mirror spam no list can
 *   keep up with. Both are only used where a word is unambiguous, and the
 *   fragment list records what that measurement rejected.
 * - Category precedence is `WEB_FILTER_CATEGORIES` order, so a domain listed
 *   twice reports the more serious category — the one the parent sees next to
 *   the blocked row.
 * - `WEB_FILTER_NEVER_BLOCK` is checked before all of it and no category may
 *   overrule it.
 *
 * These tables are not a substitute for a commercial categorisation feed, and
 * the UI says as much. They cover the sites children actually reach.
 *
 * **Every entry here is hand-checked, and an attempt to import breadth from
 * public blocklists was measured and rejected on 2026-08-23.** The two
 * candidate sources are Unlicense (so the licence was not the problem) and
 * `scripts/web-category-candidates.mjs` still produces a ranked review queue
 * from them — but their taxonomies are not this product's, and the domains
 * they rank highest are the ones they are most often wrong about. The
 * measurements are in `docs/FEASIBILITY.md`; the short version is that an
 * unreviewed import blocks a drug-help service under Drugs, a gambling
 * recovery charity under Gambling, and Project Gutenberg under Piracy. Breadth
 * comes from `functions/scheduled/classifyWebDomains`, which classifies what
 * families actually visit, not from a hosts file.
 */

import {
  WEB_FILTER_CATEGORIES,
  type WebFilterCategory,
} from '@kidgate/schema/webActivity';

const ADULT_DOMAINS = [
  // Major tubes / cams
  'pornhub.com',
  'pornhub.org',
  'pornhub.net',
  'pornhubpremium.com',
  'xvideos.com',
  'xvideos.es',
  'xnxx.com',
  'xnxx.tv',
  'xnxx.gold',
  'xhamster.com',
  'xhamster.desi',
  'xhamster2.com',
  'xhamster3.com',
  'xhwebsite.com',
  'xhopen.com',
  'xhtotal.com',
  'redtube.com',
  'youporn.com',
  'tube8.com',
  'spankbang.com',
  'chaturbate.com',
  'stripchat.com',
  'bongacams.com',
  'livejasmin.com',
  'myfreecams.com',
  'camsoda.com',
  'cam4.com',
  'onlyfans.com',
  'fansly.com',
  'manyvids.com',
  'adultfriendfinder.com',
  'ashleymadison.com',
  // Aggregators / mirrors
  'porntrex.com',
  'hqporner.com',
  'eporner.com',
  'nudevista.com',
  'beeg.com',
  'tnaflix.com',
  'drtuber.com',
  'sunporno.com',
  'porn.com',
  'pornmd.com',
  'sex.com',
  'xxx.com',
  'pornhd.com',
  'yespornplease.com',
  'sxyprn.com',
  'sxyprn.net',
  'pornflip.com',
  'xtube.com',
  'slutload.com',
  'keezmovies.com',
  'extremetube.com',
  'ahvideos.com',
  'gotporn.com',
  'pornoxo.com',
  'nuvid.com',
  'vporn.com',
  'porn300.com',
  'pornheed.com',
  'tubegalore.com',
  'empflix.com',
  'anysex.com',
  'hclips.com',
  'hdzog.com',
  'upornia.com',
  'txxx.com',
  'ok.xxx',
  'xxxtik.com',
  'missav.com',
  'missav.ws',
  'javhd.com',
  'javlibrary.com',
  'javmost.com',
  'avgle.com',
  'jable.tv',
  'netflav.com',
  'hanime.tv',
  'nhentai.net',
  'rule34.xxx',
  'rule34.paheal.net',
  'gelbooru.com',
  'danbooru.donmai.us',
  'e621.net',
  'fapello.com',
  'coomer.su',
  'coomer.party',
  'kemono.su',
  'kemono.party',
  'erome.com',
  'imagefap.com',
  'motherless.com',
  'xhamsterlive.com',
  'brazzers.com',
  'bangbros.com',
  'realitykings.com',
  'digitalplayground.com',
  'mofos.com',
  'naughtyamerica.com',
  'teamskeet.com',
  'vrporn.com',
  'pornrocket.com',
  'pornhits.com',
  'hqcollect.net',
  'thisvid.com',
  'heavy-r.com',
  'xgroovy.com',
  'porn5.com',
  '4tube.com',
  'porngo.com',
  'ixxx.com',
  'sexvid.xxx',
  'porndig.com',
  'tubepornclassic.com',
  'analdin.com',
  'pornhat.com',
  'pornktube.com',
  'pornone.com',
  'xozilla.com',
  'zbporn.com',
  'ashemaletube.com',
  'trannytube.tv',
  'gaymaletube.com',
  'pornmate.com',
  'hdtube.porn',
  'pornjam.com',
  'fuq.com',
  'definebabe.com',
  'babes.com',
  'playboy.com',
  'playboyplus.com',
  'penthouse.com',
  'hustler.com',
  'xvideos2.com',
  'xvideos3.com',
  'xnxx2.com',
  'pornhubselect.com',
  'phncdn.com',
  'trafficjunky.net',
  'adtng.com',
  'frprn.com',
  'porndoe.com',
  'nude-gals.com',
  'sexu.com',
  'pornpics.com',
  'redgifs.com',
];

const ADULT_LABELS = [
  'porn',
  'porno',
  'pornhub',
  'xvideos',
  'xnxx',
  'xhamster',
  'redtube',
  'youporn',
  'onlyfans',
  'fansly',
  'chaturbate',
  'stripchat',
  'brazzers',
  'nsfw',
  'hentai',
  'xxx',
  'xhamsterlive',
  'spankbang',
  'eporner',
  'hqporner',
  'missav',
  'nhentai',
  'rule34',
  'fapello',
  'erome',
  'motherless',
  'cam4',
  'bongacams',
  'livejasmin',
  'myfreecams',
];

const GAMBLING_DOMAINS = [
  'bet365.com',
  'bet365.es',
  'williamhill.com',
  'ladbrokes.com',
  'paddypower.com',
  'betfair.com',
  'betway.com',
  '888casino.com',
  '888sport.com',
  '888poker.com',
  'pokerstars.com',
  'partypoker.com',
  'ggpoker.com',
  'unibet.com',
  'bwin.com',
  'betfred.com',
  'coral.co.uk',
  'skybet.com',
  'draftkings.com',
  'fanduel.com',
  'betmgm.com',
  'caesars.com',
  'stake.com',
  'stake.us',
  'roobet.com',
  'rollbit.com',
  'duelbits.com',
  'bc.game',
  'csgoempire.com',
  'csgoroll.com',
  'hypedrop.com',
  '1xbet.com',
  '1win.com',
  'melbet.com',
  '22bet.com',
  'parimatch.com',
  'leovegas.com',
  'casumo.com',
  'jackpotcity.com',
  'spinpalace.com',
  'royalvegascasino.com',
  'slotomania.com',
  'doubledowncasino.com',
  'houseoffun.com',
  'chumbacasino.com',
  'luckylandslots.com',
  'gamdom.com',
  'thunderpick.io',
  'sportsbook.ag',
  'bovada.lv',
  'mybookie.ag',
  'betonline.ag',
  'fun88.com',
  'dafabet.com',
  '12bet.com',
  'w88.com',
  '188bet.com',
  'sbobet.com',
  'nohu.com',
  'gamebai.com',
];

const GAMBLING_LABELS = [
  'casino',
  'betting',
  'sportsbook',
  'pokerstars',
  'roulette',
  'slotsonline',
];

const DATING_DOMAINS = [
  'tinder.com',
  'gotinder.com',
  'bumble.com',
  'hinge.co',
  'okcupid.com',
  'match.com',
  'pof.com',
  'plentyoffish.com',
  'badoo.com',
  'grindr.com',
  'scruff.com',
  'her.app',
  'happn.com',
  'zoosk.com',
  'eharmony.com',
  'meetme.com',
  'tagged.com',
  'skout.com',
  'hily.com',
  'coffeemeetsbagel.com',
  'elitesingles.com',
  'silversingles.com',
  'adultfriendfinder.com',
  'seeking.com',
  'ashleymadison.com',
  'litmatch.net',
];

const DRUGS_DOMAINS = [
  'leafly.com',
  'weedmaps.com',
  'hightimes.com',
  'marijuana.com',
  'cannabis.net',
  'grasscity.com',
  'smokecartel.com',
  'dankstop.com',
  'elementvape.com',
  'vapordna.com',
  'vapewild.com',
  'juul.com',
  'vuse.com',
  'njoy.com',
  'puffbar.com',
  'erowid.org',
  'bluelight.org',
  'drugs-forum.com',
  'psychonautwiki.org',
  'shroomery.org',
  'dmt-nexus.me',
  'rollitup.org',
  'growweedeasy.com',
  'seedsman.com',
  'ilovegrowingmarijuana.com',
  'royalqueenseeds.com',
  'drinkupny.com',
  'totalwine.com',
  'thewhiskyexchange.com',
  // Cannabis retail and delivery — the half the first list missed, which was
  // the half a child can actually order from.
  'dutchie.com',
  'eaze.com',
  'iheartjane.com',
  'greenrush.com',
  'trulieve.com',
  'curaleaf.com',
  'cresco.com',
  'ganjagoddess.com',
  'thecannabiscommunity.com',
  // Vaping and nicotine.
  'vaporfi.com',
  'directvapor.com',
  'giantvapes.com',
  'ejuiceconnect.com',
  'breazy.com',
  'eightvape.com',
  'elfbar.com',
  'geekvape.com',
  'smokstore.com',
  'blu.com',
  'zyn.com',
  'velo.com',
  // Alcohol retail and delivery.
  'drizly.com',
  'wine.com',
  'masterofmalt.com',
  'beerhawk.co.uk',
  'saucey.com',
  'minibardelivery.com',
  'reservebar.com',
  'caskers.com',
  'flaviar.com',
];

const DRUGS_LABELS = ['vapeshop', 'headshop', 'cannabisshop'];

const VIOLENCE_DOMAINS = [
  'liveleak.com',
  'bestgore.com',
  'bestgore.fun',
  'documentingreality.com',
  'theync.com',
  'kaotic.com',
  'goregrish.com',
  'seegore.com',
  'watchpeopledie.tv',
  'hoodsite.com',
  'crazyshit.com',
  'rotten.com',
  'gore.cc',
  'deathaddict.com',
  '8kun.top',
  '8ch.net',
  'kiwifarms.net',
  'stormfront.org',
  'gab.com',
  'bitchute.com',
  'odysee.com',
  '4chan.org',
  '4channel.org',
  // Gore and shock, second pass. The first list was written from memory of
  // the 2010s; half of it is dead and the traffic moved to these.
  'gore.website',
  'goregore.com',
  'seegore.co',
  'darkfeed.net',
  'shockgore.com',
  'deathvideos.net',
  'rekt.uno',
  'kaotic.uk',
  'nothingtoxic.com',
  'ebaumsworld.com',
  'liveleakers.com',
  'ogrish.tv',
  // Extremism and harassment boards.
  'dailystormer.in',
  'vanguardnewsnetwork.com',
  'incels.is',
  'lookism.net',
  'nnnforum.com',
  'endchan.net',
  'kohlchan.net',
  'soyjak.party',
  // Weapons retail. Folded in here rather than given a toggle: a parent who
  // has turned violence on has already answered this question, and a twelfth
  // switch that fires on ten domains is a worse answer than a thicker table.
  'gunbroker.com',
  'budsgunshop.com',
  'palmettostatearmory.com',
  'cheaperthandirt.com',
  'atlanticfirearms.com',
  'armslist.com',
  'sportsmansguide.com',
  'brownells.com',
  'primaryarms.com',
  'knifecenter.com',
  'bladehq.com',
  'trueswords.com',
  'airsoftgi.com',
  'evike.com',
];

const VIOLENCE_LABELS = ['gore', 'beheading'];

/**
 * Pro-eating-disorder and pro-suicide communities — the sites that encourage
 * it, never the ones that help.
 *
 * Split out of `violence`, which was and remains harm aimed at other people.
 * A parent scanning a blocked row wants to know which of the two they are
 * looking at, and "Violence" over a pro-ana forum tells them the wrong thing
 * about their own child.
 *
 * **The label pass carries most of this category, and that is on purpose.**
 * These communities move hosts constantly and rebuild under the same
 * vocabulary, so a domain table alone ages out in months. The four labels below
 * are terms with no innocent use; `selfharm` deliberately is **not** one of
 * them — recovery and helpline sites use that word too, and blocking a child's
 * route to help while claiming to protect them is the worst failure this table
 * could have.
 *
 * This is the category most in need of a categorisation feed rather than a
 * hand-kept list. Read the note at the top of this file before growing it.
 */
const SELF_HARM_DOMAINS = [
  // Pro-eating-disorder forums
  'myproana.com',
  'proanatips.com',
  'thinspoblog.com',
  // Pro-suicide forums, both long-documented and both still reachable
  'sanctioned-suicide.net',
  'sanctionedsuicide.com',
  'lostallhope.com',
];

const SELF_HARM_LABELS = ['proana', 'promia', 'thinspo', 'thinspiration'];

/**
 * Extremist and organised-hate sites.
 *
 * The other half of the `violence` split. Kept to sites whose **purpose** is
 * the ideology — not general platforms that host some of it, because a table
 * that starts categorising platforms by their worst users is a table that ends
 * up blocking the open web and calling it safety. Where that line should sit
 * is a product decision, and it is one this file must not make quietly.
 *
 * `dailystormer` has moved TLD repeatedly; the entries below are the hosts it
 * has settled on, and a mirror this misses reaches the navigation pass rather
 * than nothing.
 */
const EXTREMISM_DOMAINS = [
  'stormfront.org',
  'dailystormer.in',
  'dailystormer.su',
  'dailystormer.name',
  'vanguardnewsnetwork.com',
  'amren.com',
  'counter-currents.com',
  'theoccidentalobserver.net',
  'nordfront.se',
  'kiwifarms.net',
  'kiwifarms.st',
  '8kun.top',
];

/**
 * Gambling wearing a game's clothes: loot boxes, case opening, skin betting.
 *
 * Split out of `gambling`, which is casinos and sports books — venues a child
 * cannot get into and mostly does not try to. These are the ones they actually
 * reach, they take payment in game items rather than chips, and they are
 * advertised inside games and by streamers a child already follows.
 *
 * **Skin marketplaces are not here.** Buying an item at a listed price is a
 * purchase, and a table that cannot tell a shop from a wheel would block the
 * Steam economy for every family that switched this on.
 */
const GAME_GAMBLING_DOMAINS = [
  // CS case opening and coinflip
  'csgoempire.com',
  'csgoroll.com',
  'csgofast.com',
  'csgo500.com',
  'csgoatse.com',
  'hellcase.com',
  'key-drop.com',
  'farmskins.com',
  'skinclub.com',
  'skinsmonkey.com',
  'clash.gg',
  'howl.gg',
  'daddyskins.com',
  // Rust
  'rustclash.com',
  'rustmagic.com',
  'rustchance.com',
  // Roblox
  'bloxflip.com',
  'rblxwild.com',
  // Crypto casinos marketed through gaming streamers
  'gamdom.com',
  'roobet.com',
  'duelbits.com',
  'rollbit.com',
  // Mystery-box sites
  'hypedrop.com',
  'packdraw.com',
  'lootbear.com',
];

/**
 * Anonymous video and text chat with strangers.
 *
 * Split out of `dating`, whose hint said "dating and stranger-chat apps" and
 * was therefore two decisions in one switch. They are not the same decision:
 * a dating site refuses under-18s and is a rule about growing up too fast,
 * while these pair a child with an unscreened adult on camera in one click and
 * are the single most direct grooming route on the consumer web.
 *
 * Omegle closed in 2023 and its clones did not; most of this table is them,
 * which is why the labels matter as much as the domains here.
 */
const STRANGER_CHAT_DOMAINS = [
  'omegle.com',
  'omegle.tv',
  'uhmegle.com',
  'ome.tv',
  'emeraldchat.com',
  'chatroulette.com',
  'chatrandom.com',
  'chatspin.com',
  'chathub.cam',
  'camsurf.com',
  'camgo.com',
  'bazoocam.org',
  'shagle.com',
  'coomeet.com',
  'joingy.com',
  'tinychat.com',
  'chatiw.com',
  'chatib.us',
  'talkwithstranger.com',
  'e-chat.co',
  'wakie.com',
  'holla.world',
  'azarlive.com',
  'monkey.cool',
  'yubo.live',
  'monkey.app',
  'azar.live',
  'hago.com',
  'litmatch.net',
];

const STRANGER_CHAT_LABELS = ['omegle', 'chatroulette', 'chatrandom'];

const PIRACY_DOMAINS = [
  'thepiratebay.org',
  'thepiratebay10.org',
  '1337x.to',
  '1337x.st',
  'rarbg.to',
  'torrentgalaxy.to',
  'nyaa.si',
  'yts.mx',
  'eztv.re',
  'limetorrents.lol',
  'kickasstorrents.to',
  'katcr.co',
  'torlock.com',
  'zooqle.com',
  'bitsearch.to',
  'fmovies.to',
  'fmoviesz.to',
  '123movies.net',
  'putlocker.vip',
  'soap2day.to',
  'sflix.to',
  'gomovies.sx',
  'primewire.mx',
  'movierulz.com',
  'tamilrockers.ws',
  'filmyzilla.com',
  '9anime.to',
  'aniwatch.to',
  'gogoanime.tel',
  'zoro.to',
  'kisscartoon.sh',
  'libgen.is',
  'libgen.rs',
  'sci-hub.se',
  'z-lib.io',
  'annas-archive.org',
  'olevod.com',
  'fshare.vn',
  'phimmoi.net',
  'animevietsub.tv',
  'vuighe.net',
];

const PIRACY_LABELS = ['torrent', 'torrentz', 'putlocker', '123movies'];

const SOCIAL_DOMAINS = [
  'facebook.com',
  'fb.com',
  'fbcdn.net',
  'messenger.com',
  'instagram.com',
  'cdninstagram.com',
  'tiktok.com',
  'tiktokv.com',
  'musical.ly',
  'snapchat.com',
  'sc-cdn.net',
  'x.com',
  'twitter.com',
  'twimg.com',
  'reddit.com',
  'redd.it',
  'tumblr.com',
  'pinterest.com',
  'discord.com',
  'discordapp.com',
  'discord.gg',
  'telegram.org',
  't.me',
  'web.telegram.org',
  'whatsapp.com',
  'vk.com',
  'weibo.com',
  'threads.net',
  'bsky.app',
  'mastodon.social',
  'kik.com',
  'yubo.live',
  'zalo.me',
  'line.me',
  'kakao.com',
];

const VIDEO_STREAMING_DOMAINS = [
  'youtube.com',
  'youtu.be',
  'youtubei.googleapis.com',
  'ytimg.com',
  'googlevideo.com',
  'netflix.com',
  'nflxvideo.net',
  'disneyplus.com',
  'hulu.com',
  'max.com',
  'hbomax.com',
  'primevideo.com',
  'peacocktv.com',
  'paramountplus.com',
  'crunchyroll.com',
  'twitch.tv',
  'ttvnw.net',
  'kick.com',
  'dailymotion.com',
  'vimeo.com',
  'bilibili.com',
  'iq.com',
  'iqiyi.com',
  'viu.com',
  'fptplay.vn',
  'vieon.vn',
  'galaxyplay.vn',
];

const GAMING_DOMAINS = [
  'roblox.com',
  'rbxcdn.com',
  'minecraft.net',
  'epicgames.com',
  'fortnite.com',
  'steampowered.com',
  'steamcommunity.com',
  'battle.net',
  'blizzard.com',
  'riotgames.com',
  'leagueoflegends.com',
  'valorant.com',
  'ea.com',
  'origin.com',
  'ubisoft.com',
  'playstation.com',
  'xbox.com',
  'nintendo.com',
  'miniclip.com',
  'poki.com',
  'crazygames.com',
  'friv.com',
  'y8.com',
  'kongregate.com',
  'addictinggames.com',
  'coolmathgames.com',
  'itch.io',
  'garena.com',
  'supercell.com',
  'mobilelegends.com',
  'pubgmobile.com',
  'genshin.hoyoverse.com',
  'hoyoverse.com',
  'nintendoswitch.com',
];

const SHOPPING_DOMAINS = [
  'amazon.com',
  'ebay.com',
  'aliexpress.com',
  'alibaba.com',
  'temu.com',
  'shein.com',
  'wish.com',
  'etsy.com',
  'walmart.com',
  'target.com',
  'bestbuy.com',
  'asos.com',
  'zara.com',
  'hm.com',
  'nike.com',
  'adidas.com',
  'shopee.vn',
  'shopee.com',
  'lazada.vn',
  'lazada.com',
  'tiki.vn',
  'sendo.vn',
  'taobao.com',
  'tmall.com',
  'jd.com',
  'rakuten.co.jp',
  'mercadolibre.com',
  'flipkart.com',
  'myntra.com',
];

/**
 * Music and podcast streaming.
 *
 * Separate from `videoStreaming` because a parent who wants the television
 * quiet at homework time and a parent who wants the speaker quiet are making
 * different decisions, and until this existed every music service fell through
 * every table into "unclassified".
 *
 * **YouTube Music cannot be separated here and nothing should pretend it is.**
 * Matching walks a hostname's parent labels, so `music.youtube.com` reaches
 * `youtube.com` in `VIDEO_STREAMING_DOMAINS` — and categories are tried in
 * `WEB_FILTER_CATEGORIES` order, where `videoStreaming` comes first. Listing
 * the subdomain here would not win; reordering so it did would file plain
 * `youtube.com` days under the wrong heading on any day the child used both,
 * because the history row collapses to the registrable domain either way.
 */
const MUSIC_DOMAINS = [
  'spotify.com',
  'scdn.co',
  'spotifycdn.com',
  'soundcloud.com',
  'sndcdn.com',
  'deezer.com',
  'dzcdn.net',
  'tidal.com',
  'pandora.com',
  'audiomack.com',
  'bandcamp.com',
  'bcbits.com',
  'last.fm',
  'mixcloud.com',
  'napster.com',
  'anghami.com',
  'joox.com',
  'zingmp3.vn',
  'zmdcdn.me',
  'nhaccuatui.com',
  'nixcdn.com',
  'nhac.vn',
  'keeng.vn',
];

/**
 * Companion and roleplay chatbots — a stranger that never logs off.
 *
 * Kept apart from `AI_ASSISTANT_DOMAINS` because they are not one decision.
 * A parent blocking Character.AI is worried about who their child is confiding
 * in; a parent blocking ChatGPT is worried about homework. One toggle would
 * have made each of them turn off the other's thing by accident.
 */
const AI_COMPANION_DOMAINS = [
  'character.ai',
  'c.ai',
  'characterai.io',
  'janitorai.com',
  'replika.com',
  'replika.ai',
  'chai-research.com',
  'chai.ml',
  'crushon.ai',
  'spicychat.ai',
  'talkie-ai.com',
  'polybuzz.ai',
  'linky.ai',
  'candy.ai',
  'kindroid.ai',
  'nomi.ai',
  'muah.ai',
  'yodayo.com',
  'pephop.ai',
  'chub.ai',
  'venus.chub.ai',
  'figgs.ai',
  'moemate.io',
  'anima.ai',
];

/**
 * General-purpose assistants. Homework, not safety — off by default.
 *
 * `gemini.google.com` and `copilot.microsoft.com` belong here and work:
 * matching walks a hostname's parent labels, and neither `google.com` nor
 * `microsoft.com` is claimed by any table, so nothing outranks these. The
 * recorded history row still collapses to `google.com`, which is a limit of
 * the row and not of the block.
 */
const AI_ASSISTANT_DOMAINS = [
  'chatgpt.com',
  'openai.com',
  'oaiusercontent.com',
  'claude.ai',
  'anthropic.com',
  'perplexity.ai',
  'gemini.google.com',
  'bard.google.com',
  'aistudio.google.com',
  'copilot.microsoft.com',
  'poe.com',
  'deepseek.com',
  'mistral.ai',
  'x.ai',
  'grok.com',
  'huggingface.co',
  'quillbot.com',
  'jasper.ai',
  'writesonic.com',
  'you.com',
  'phind.com',
  'blackbox.ai',
  'chatsonic.com',
  'chatpdf.com',
];

/**
 * Exchanges, wallets and zero-commission trading.
 *
 * A teenager's first contact with this is almost never investing — it is a
 * Telegram group promising a return. The wallets are here for the same reason
 * as the exchanges: a seed phrase typed into a phishing page is the loss, and
 * it happens on the wallet's own domain.
 */
const CRYPTO_TRADING_DOMAINS = [
  'binance.com',
  'binance.us',
  'coinbase.com',
  'kraken.com',
  'kucoin.com',
  'bybit.com',
  'okx.com',
  'mexc.com',
  'gate.io',
  'htx.com',
  'huobi.com',
  'bitget.com',
  'bitfinex.com',
  'crypto.com',
  'blockchain.com',
  'metamask.io',
  'trustwallet.com',
  'phantom.app',
  'ledger.com',
  'opensea.io',
  'pancakeswap.finance',
  'uniswap.org',
  'remitano.com',
  'aliniex.com',
  'robinhood.com',
  'etoro.com',
  'webull.com',
  'plus500.com',
  'exness.com',
  'xm.com',
];

/**
 * Commercial VPN providers.
 *
 * A toggle, not plumbing, and the difference matters: blocking these reaches
 * the download page and the account portal, never a client already installed.
 * The lookups that actually route around this filter are in
 * `DNS_BYPASS_DOMAINS`, which no toggle and no allow-list entry can open.
 */
const VPN_DOMAINS = [
  'nordvpn.com',
  'expressvpn.com',
  'surfshark.com',
  'protonvpn.com',
  'cyberghostvpn.com',
  'privateinternetaccess.com',
  'ipvanish.com',
  'purevpn.com',
  'hotspotshield.com',
  'tunnelbear.com',
  'windscribe.com',
  'mullvad.net',
  'ivpn.net',
  'atlasvpn.com',
  'vyprvpn.com',
  'hidemyass.com',
  'zenmate.com',
  'urban-vpn.com',
  'betternet.co',
  'turbovpn.co',
  'vpnbook.com',
  'openvpn.net',
  'wireguard.com',
];

export const WEB_FILTER_DOMAINS_BY_CATEGORY: Readonly<
  Record<WebFilterCategory, readonly string[]>
> = {
  adult: ADULT_DOMAINS,
  selfHarm: SELF_HARM_DOMAINS,
  gambling: GAMBLING_DOMAINS,
  gameGambling: GAME_GAMBLING_DOMAINS,
  dating: DATING_DOMAINS,
  strangerChat: STRANGER_CHAT_DOMAINS,
  drugs: DRUGS_DOMAINS,
  violence: VIOLENCE_DOMAINS,
  extremism: EXTREMISM_DOMAINS,
  piracy: PIRACY_DOMAINS,
  social: SOCIAL_DOMAINS,
  videoStreaming: VIDEO_STREAMING_DOMAINS,
  music: MUSIC_DOMAINS,
  gaming: GAMING_DOMAINS,
  shopping: SHOPPING_DOMAINS,
  aiCompanion: AI_COMPANION_DOMAINS,
  aiAssistant: AI_ASSISTANT_DOMAINS,
  cryptoTrading: CRYPTO_TRADING_DOMAINS,
  vpn: VPN_DOMAINS,
};

/**
 * Fragments that claim a category anywhere in the hostname — the widest pass,
 * and the one that keeps up with mirror spam.
 *
 * `porn` as a *label* matches `porn.com` and nothing else. As a *fragment* it
 * matches `free-pornhat.cfd`, `asiateenporn.wtf`, `the-youporn.beauty` and
 * roughly a thousand others in the top million alone — ninety of which no
 * public blocklist holds, because they were registered after the list was
 * built. No table can win that race and this does not have to.
 *
 * ## Every entry here was measured, and intuition got several of them wrong
 *
 * Each candidate was run against the Majestic Million — a million real,
 * well-linked domains — and every match read. A word ships only if the matches
 * are all genuinely the category. What that caught:
 *
 * | Rejected | Because it also matches                                   |
 * | -------- | --------------------------------------------------------- |
 * | `sex`    | `sussex.ac.uk`, `essex.ac.uk`, `lasexta.com`              |
 * | `anal`   | `planalto.gov.br`, `analog.com`, `canalplus.com`          |
 * | `nude`   | `sprachnudel.de`, `menudesignshop.com`, `jonudell.net`    |
 * | `weed`   | `tweedekamer.nl` (Dutch parliament), `magicseaweed.com`   |
 * | `vape`   | `conservapedia.com`                                        |
 * | `milf`   | `milforddailynews.com`                                     |
 * | `bdsm`   | `bdsmovement.net`                                          |
 * | `baccarat` | `baccarat.com` — the crystal maker                       |
 * | `pirate` | `piratenpartei.de` (a political party)                    |
 * | `warez`  | `hardwarezone.com`                                         |
 * | `skinbet`| `skinbetter.com` — skincare                                |
 * | `roulette` | `chatroulette.com` — real, but the wrong category       |
 * | `fuck`   | `jsfuck.com`, `programming-motherfucker.com` — profanity, not pornography, and this product has no profanity category |
 *
 * Two of those are the ones that matter: `anal` would have blocked the
 * Brazilian presidency and Analog Devices, and `weed` the Dutch parliament.
 * Both read as obviously safe until the measurement ran.
 *
 * **Reproduce before adding a word.** `scripts/web-category-candidates.mjs`
 * downloads the Majestic CSV this was measured against; grep it for the
 * candidate and read every hit. A word with even one innocent match either
 * does not ship or ships with an entry in `SUBSTRING_EXCEPTIONS`.
 */
export const WEB_FILTER_SUBSTRINGS_BY_CATEGORY: Readonly<
  Partial<Record<WebFilterCategory, readonly string[]>>
> = {
  // 1,004 matches in the top million, and every one of them pornography.
  adult: [
    'porn',
    'hentai',
    'escort',
    'erotic',
    'camgirl',
    'blowjob',
    'shemale',
    'cumshot',
    'boobs',
    // Two innocent matches, both in `SUBSTRING_EXCEPTIONS`. Kept because it
    // claims 348 porn mirrors the domain tables do not have.
    'xxx',
  ],
  selfHarm: ['proana', 'promia', 'thinspo', 'thinspiration'],
  gambling: ['casino', 'poker', 'betting', 'jackpot', 'bookmaker'],
  strangerChat: ['omegle', 'chatroulette', 'randomchat', 'camchat'],
  drugs: ['kratom', 'cannabis'],
  piracy: ['torrent', 'putlocker', '123movies'],
};

/**
 * Hostnames a fragment must not claim.
 *
 * Narrow by design: an exception is the price of keeping a high-yield word,
 * not a way to keep a bad one. Both entries are `xxx` — a DJ application and
 * an Austrian furniture chain.
 */
export const SUBSTRING_EXCEPTIONS = ['mixxx.org', 'xxxlutz.de', 'xxxlutz.at'];

/**
 * Help and recovery services, which no category may ever claim.
 *
 * Checked before the category tables and beaten by nothing except a parent
 * explicitly blocking the domain themselves. It exists because the same
 * failure keeps arriving by different routes: a drug-help service categorised
 * under Drugs, a gambling recovery charity under Gambling, a pro-recovery
 * forum under Self-harm. Every one of those was a real candidate — the first
 * two ranked at the top of their category in the blocklist import measured on
 * 2026-08-23 (`docs/FEASIBILITY.md`), and the third is why `selfharm` is not
 * one of the labels above.
 *
 * A child looking for a way out must not be stopped by the thing their parent
 * installed to protect them. That is worth a list nobody can turn off.
 */
export const WEB_FILTER_NEVER_BLOCK = [
  // Drugs and alcohol
  'talktofrank.com',
  'aa.org',
  'na.org',
  'marijuana-anonymous.org',
  'cocaineanonymous.org.uk',
  'samhsa.gov',
  'drugfree.org',
  // Gambling
  'gamblersanonymous.org',
  'begambleaware.org',
  'gamcare.org.uk',
  // Suicide, self-harm and eating disorders
  '988lifeline.org',
  'suicidepreventionlifeline.org',
  'samaritans.org',
  'befrienders.org',
  'crisistextline.org',
  'nationaleatingdisorders.org',
  'beateatingdisorders.org.uk',
  // Children and young people
  'childline.org.uk',
  'kidshelpphone.ca',
  'childhelphotline.org',
];

/** Only the categories where a bare word is unambiguous carry labels. */
export const WEB_FILTER_LABELS_BY_CATEGORY: Readonly<
  Partial<Record<WebFilterCategory, readonly string[]>>
> = {
  adult: ADULT_LABELS,
  selfHarm: SELF_HARM_LABELS,
  gambling: GAMBLING_LABELS,
  strangerChat: STRANGER_CHAT_LABELS,
  drugs: DRUGS_LABELS,
  violence: VIOLENCE_LABELS,
  piracy: PIRACY_LABELS,
};

/**
 * Everything whose whole purpose is to route around this filter.
 *
 * Blocked whenever the filter runs at all, and deliberately not a category: a
 * browser that reaches its own DoH resolver stops asking the system resolver
 * anything, and every other table here becomes decorative. Enforcement
 * plumbing, not a parenting choice — `dnsBypass` has no toggle by design
 * (`@kidgate/schema/webActivity` says so at the union), and it beats the allow
 * list, because a parent typing `croxyproxy.com` into their exceptions has not
 * asked to turn the filter off.
 *
 * Two kinds live here, on one argument:
 *
 * - **Encrypted-DNS resolvers.** The original list.
 * - **Web proxies and anti-censorship tunnels.** A page that fetches a site on
 *   the child's behalf never asks this device to resolve the site at all, so
 *   no category can see it. This is the bypass that actually happens — one
 *   search away, no install, no account.
 *
 * Commercial VPN providers are **not** here. Blocking their websites reaches a
 * download page and nothing else, which is a parenting choice about what to
 * install and belongs in the `vpn` category with a toggle and an honest hint.
 */
export const DNS_BYPASS_DOMAINS: readonly string[] = [
  'dns.google',
  'dns.google.com',
  'cloudflare-dns.com',
  'mozilla.cloudflare-dns.com',
  'chrome.cloudflare-dns.com',
  'one.one.one.one',
  '1dot1dot1dot1.cloudflare-dns.com',
  'dns.quad9.net',
  'dns9.quad9.net',
  'dns10.quad9.net',
  'dns11.quad9.net',
  'doh.opendns.com',
  'doh.familyshield.opendns.com',
  'dns.adguard.com',
  'dns-family.adguard.com',
  'dns.adguard-dns.com',
  'doh.cleanbrowsing.org',
  'doh.dns.sb',
  'doh.pub',
  'dns.alidns.com',
  'doh.360.cn',
  'dns.nextdns.io',
  'firefox.dns.nextdns.io',
  'chromium.dns.nextdns.io',
  'apple.dns.nextdns.io',
  'doh.powerdns.org',
  'resolver1.opendns.com',
  'resolver2.opendns.com',
  // Web proxies — the bypass a child finds in one search.
  'croxyproxy.com',
  'croxyproxy.rocks',
  'proxysite.com',
  'hide.me',
  'hidester.com',
  'kproxy.com',
  '4everproxy.com',
  'blockaway.net',
  'plainproxies.com',
  'proxyium.com',
  'proxynova.com',
  'whoer.net',
  'zend.to',
  'unblocksite.net',
  'unblockit.li',
  'freeproxy.win',
  'genmirror.com',
  'nginx-proxy.com',
  // Anti-censorship tunnels and onion routing.
  'torproject.org',
  'torproject.net',
  'tails.net',
  'psiphon.ca',
  'psiphon3.com',
  'ultrasurf.us',
  'getlantern.org',
  'lantern.io',
  'shadowsocks.org',
  'v2ray.com',
  'freegate.net',
  'briarproject.org',
];

/**
 * Infrastructure hostnames that are never a page a child chose to open.
 *
 * A filter sees every connection a device makes, and most of them are CDNs, ad
 * exchanges, crash reporters and OS connectivity probes. Logging those would
 * bury the handful of rows a parent actually wants under hundreds they do not,
 * and would cost a Firestore document each — so they are dropped before
 * anything is counted. Blocked traffic skips this list: a blocked lookup is
 * the evidence the filter worked.
 */
export const WEB_NOISE_DOMAINS: readonly string[] = [
  // Ads / analytics / attribution
  'doubleclick.net',
  'googlesyndication.com',
  'googleadservices.com',
  'google-analytics.com',
  'googletagmanager.com',
  'googletagservices.com',
  'adservice.google.com',
  'app-measurement.com',
  'scorecardresearch.com',
  'adnxs.com',
  'rubiconproject.com',
  'pubmatic.com',
  'casalemedia.com',
  'criteo.com',
  'criteo.net',
  'taboola.com',
  'outbrain.com',
  'moatads.com',
  'adsrvr.org',
  'amazon-adsystem.com',
  'unityads.unity3d.com',
  'applovin.com',
  'adcolony.com',
  'vungle.com',
  'chartboost.com',
  'inmobi.com',
  'smaato.net',
  'mopub.com',
  'branch.io',
  'appsflyer.com',
  'adjust.com',
  'kochava.com',
  'amplitude.com',
  'mixpanel.com',
  'segment.io',
  'segment.com',
  'sentry.io',
  'bugsnag.com',
  'crashlytics.com',
  'newrelic.com',
  'hotjar.com',
  'clarity.ms',
  // CDNs / static hosts
  'akamai.net',
  'akamaized.net',
  'akamaiedge.net',
  'akadns.net',
  'edgekey.net',
  'edgesuite.net',
  'cloudfront.net',
  'fastly.net',
  'fastlylb.net',
  'llnwd.net',
  'cdn77.org',
  'stackpathdns.com',
  'jsdelivr.net',
  'unpkg.com',
  'bootstrapcdn.com',
  'gstatic.com',
  'googleapis.com',
  'googleusercontent.com',
  'ggpht.com',
  'cloudflare.com',
  'cloudflareinsights.com',
  'cloudflare-dns.com',
  'aaplimg.com',
  'cdn-apple.com',
  'mzstatic.com',
  // OS / connectivity / push
  'connectivitycheck.gstatic.com',
  'connectivitycheck.android.com',
  'msftconnecttest.com',
  'msftncsi.com',
  'ntp.org',
  'pool.ntp.org',
  'time.android.com',
  'time.apple.com',
  'android.clients.google.com',
  'play.googleapis.com',
  'mtalk.google.com',
  'gvt1.com',
  'gvt2.com',
  'gvt3.com',
  'push.apple.com',
  'courier.push.apple.com',
  'in-appadvertising.apple.com',
  'firebaseinstallations.googleapis.com',
  'firebaseremoteconfig.googleapis.com',
  'fcmtoken.googleapis.com',
  'in.appcenter.ms',
  'arpa',
];

/**
 * The common multi-part public suffixes, enumerated.
 *
 * A full public-suffix list is far too much to ship for this; getting
 * `example.co.uk` wrong would collapse every British site to `co.uk`, which is
 * worse than leaving an unusual suffix one label too deep.
 */
export const MULTI_PART_SUFFIXES: readonly string[] = [
  'co.uk',
  'org.uk',
  'ac.uk',
  'gov.uk',
  'me.uk',
  'net.uk',
  'sch.uk',
  'com.au',
  'net.au',
  'org.au',
  'edu.au',
  'gov.au',
  'id.au',
  'com.vn',
  'net.vn',
  'org.vn',
  'edu.vn',
  'gov.vn',
  'com.br',
  'net.br',
  'org.br',
  'gov.br',
  'co.jp',
  'or.jp',
  'ne.jp',
  'ac.jp',
  'go.jp',
  'co.kr',
  'or.kr',
  'ne.kr',
  'go.kr',
  'com.cn',
  'net.cn',
  'org.cn',
  'gov.cn',
  'edu.cn',
  'com.tw',
  'net.tw',
  'org.tw',
  'com.hk',
  'net.hk',
  'org.hk',
  'com.sg',
  'net.sg',
  'org.sg',
  'edu.sg',
  'com.my',
  'net.my',
  'org.my',
  'co.id',
  'or.id',
  'web.id',
  'ac.id',
  'co.th',
  'in.th',
  'ac.th',
  'go.th',
  'com.ph',
  'net.ph',
  'org.ph',
  'com.mx',
  'com.ar',
  'com.co',
  'com.pe',
  'com.tr',
  'com.pk',
  'co.in',
  'net.in',
  'org.in',
  'gov.in',
  'ac.in',
  'co.za',
  'org.za',
  'net.za',
  'co.nz',
  'net.nz',
  'org.nz',
  'com.es',
  'com.pl',
  'com.ua',
  'com.ru',
];

/* ---- matching -------------------------------------------------------------- */

const DOMAIN_SETS = new Map<WebFilterCategory, Set<string>>(
  WEB_FILTER_CATEGORIES.map(category => [
    category,
    new Set(WEB_FILTER_DOMAINS_BY_CATEGORY[category]),
  ]),
);

const LABEL_SETS = new Map<WebFilterCategory, Set<string>>(
  Object.entries(WEB_FILTER_LABELS_BY_CATEGORY).map(([category, labels]) => [
    category as WebFilterCategory,
    new Set(labels),
  ]),
);

const SUBSTRING_LISTS = new Map<WebFilterCategory, readonly string[]>(
  Object.entries(WEB_FILTER_SUBSTRINGS_BY_CATEGORY).map(([category, fragments]) => [
    category as WebFilterCategory,
    fragments ?? [],
  ]),
);

const DNS_BYPASS_SET = new Set(DNS_BYPASS_DOMAINS);
const NOISE_SET = new Set(WEB_NOISE_DOMAINS);
const SUFFIX_SET = new Set(MULTI_PART_SUFFIXES);
const EXCEPTION_SET = new Set(SUBSTRING_EXCEPTIONS);
const NEVER_BLOCK_SET = new Set(WEB_FILTER_NEVER_BLOCK);

/**
 * Lowercased, trailing dot and leading `www.` removed.
 *
 * Must agree with `normalizeWebDomain` (this package) and Kotlin's
 * `canonicalHost`: a domain the parent typed and a hostname the filter saw
 * have to collapse to the same string, or the allow list silently stops
 * matching.
 */
export function canonicalWebHost(hostname: string): string {
  let host = hostname.trim().toLowerCase();
  while (host.endsWith('.')) {
    host = host.slice(0, -1);
  }
  if (host.startsWith('www.')) {
    host = host.slice(4);
  }
  return host;
}

/** True when `host` equals an entry of `domains` or is a subdomain of one. Expects a canonical host. */
function matchesSet(host: string, domains: ReadonlySet<string>): boolean {
  if (domains.has(host)) {
    return true;
  }
  let index = host.indexOf('.');
  while (index >= 0 && index < host.length - 1) {
    if (domains.has(host.slice(index + 1))) {
      return true;
    }
    index = host.indexOf('.', index + 1);
  }
  return false;
}

/** True when `hostname` is `domain` or one of its subdomains. */
export function matchesWebDomain(hostname: string, domain: string): boolean {
  const host = canonicalWebHost(hostname);
  const target = canonicalWebHost(domain);
  if (!host || !target) {
    return false;
  }
  return host === target || host.endsWith(`.${target}`);
}

export function matchesAnyWebDomain(
  hostname: string,
  domains: readonly string[],
): boolean {
  return domains.some(domain => matchesWebDomain(hostname, domain));
}

/** True when `hostname` is an encrypted-DNS resolver. */
export function isDnsBypassHost(hostname: string): boolean {
  const host = canonicalWebHost(hostname);
  return host.length > 0 && matchesSet(host, DNS_BYPASS_SET);
}

/**
 * The first category in `WEB_FILTER_CATEGORIES` order that claims `hostname`,
 * restricted to `enabled`, or null. Pass every category to classify rather
 * than to enforce — history rows label allowed traffic too.
 */
export function webCategoryFor(
  hostname: string,
  enabled: ReadonlySet<WebFilterCategory> | readonly WebFilterCategory[],
): WebFilterCategory | null {
  const host = canonicalWebHost(hostname);
  if (!host) {
    return null;
  }
  /*
   * Before every table, and the only rule here with no category behind it.
   * `WEB_FILTER_NEVER_BLOCK` says why: a child reaching for a helpline must not
   * be stopped by a word in its hostname.
   */
  if (matchesSet(host, NEVER_BLOCK_SET)) {
    return null;
  }
  const enabledSet = enabled instanceof Set ? enabled : new Set(enabled);
  const labels = host.split('.');

  for (const category of WEB_FILTER_CATEGORIES) {
    if (!enabledSet.has(category)) {
      continue;
    }
    const domains = DOMAIN_SETS.get(category);
    if (domains && matchesSet(host, domains)) {
      return category;
    }
    const categoryLabels = LABEL_SETS.get(category);
    if (categoryLabels && labels.some(label => label && categoryLabels.has(label))) {
      return category;
    }
    /*
     * Widest and therefore last within a category: an exact table entry should
     * be what answers when there is one, so the reason a domain was claimed is
     * the most specific one available.
     */
    if (matchesSubstrings(host, SUBSTRING_LISTS.get(category))) {
      return category;
    }
  }
  return null;
}

/**
 * Does any fragment appear anywhere in the hostname?
 *
 * A scan rather than a set: fragments match at unknown offsets, so there is
 * nothing to hash. The lists are a handful of words each and the loop stops at
 * the first hit, which is why this stays cheap enough for the extension's
 * per-navigation pass.
 */
function matchesSubstrings(
  host: string,
  fragments: readonly string[] | undefined,
): boolean {
  if (!fragments || fragments.length === 0 || EXCEPTION_SET.has(host)) {
    return false;
  }
  return fragments.some(fragment => host.includes(fragment));
}

/**
 * KidGate's own product surfaces — dashboard, site, Cloud Functions.
 *
 * Checked before `allowedDomains` and before `blockedDomains`, so nothing a
 * parent types, including the domain itself, can block the app the parent
 * uses to run the filter. Unlike `WEB_FILTER_NEVER_BLOCK`, which a parent's
 * explicit block still beats (`webCategoryFor`'s doc comment says so), this
 * one is absolute — the same guarantee `DNS_BYPASS_DOMAINS` gets on the block
 * side. A family that mistypes `kidgate.app` into their block list, or a
 * child who finds the exceptions list, must not be able to take the parent
 * console down.
 */
export const KIDGATE_OWN_DOMAINS: readonly string[] = ['kidgate.app'];

const KIDGATE_OWN_SET = new Set(KIDGATE_OWN_DOMAINS);

/** True when `hostname` is KidGate's own domain or a subdomain of it. */
export function isKidGateOwnHost(hostname: string): boolean {
  const host = canonicalWebHost(hostname);
  return host.length > 0 && matchesSet(host, KIDGATE_OWN_SET);
}

/**
 * True for infrastructure that is never a page a child chose to open.
 * Applied to allowed traffic only — a blocked lookup is always recorded.
 */
export function isWebNoiseHost(hostname: string): boolean {
  const host = canonicalWebHost(hostname);
  if (!host) {
    return true;
  }
  if (
    host.endsWith('.arpa') ||
    host.endsWith('.local') ||
    host.endsWith('.internal') ||
    host.endsWith('.lan')
  ) {
    return true;
  }
  if (!host.includes('.')) {
    return true;
  }
  return matchesSet(host, NOISE_SET);
}

/**
 * Collapses a hostname to the domain a parent would recognise —
 * `m.youtube.com` and `youtube.com` are the same site to a parent, and showing
 * them apart is the difference between a readable list and a DNS trace.
 */
export function registrableWebDomain(host: string): string {
  const labels = host.split('.');
  if (labels.length <= 2) {
    return host;
  }
  const lastTwo = labels.slice(-2).join('.');
  const keep = SUFFIX_SET.has(lastTwo) ? 3 : 2;
  if (labels.length <= keep) {
    return host;
  }
  return labels.slice(-keep).join('.');
}

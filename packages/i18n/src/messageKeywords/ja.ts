import type { MessageKeywordPack } from './types';

/**
 * Japanese message-monitoring keywords.
 *
 * Added 2026-08-29 and **NOT reviewed by anyone who reads Japanese**. Kept
 * deliberately small and to the least ambiguous phrases for that reason: a
 * wrong term here alarms a parent about their child in a language nobody in
 * this repo can audit. Treat every line as provisional.
 *
 * Japanese writes without spaces — which is also why no term here contains one:
 * a spaced term simply never appears in real text. `foldTokens` yields one token per
 * message and the short-term rule never applies; these match as substrings on
 * the exact pass. That is the right behaviour here — but it also means a term
 * short enough to appear inside an unrelated word WILL over-trigger, which is
 * why nothing below is shorter than a full phrase.
 */
export const ja: MessageKeywordPack = {
  terms: {
    predator: [
      '親には言わないで',
      '誰にも言わないで',
      '二人だけの秘密',
      'このチャットを消して',
      'メッセージを消して',
      '写真を送って',
      '家に一人なの',
      '親はいるの',
      '親はいつ出かける',
      '二人だけで会おう',
      '一人で来て',
      '個人的に話そう',
      'テレグラムに移ろう',
      '年齢の割に大人っぽい',
      '援交',
      '援助交際',
      'パパ活',
      'ママ活',
      '神待ち',
      '家出したい',
      '泊めてくれる人',
      '泊めて',
      '裏垢',
      'サブ垢',
      '闇バイト',
      '高収入即日',
      '即金バイト',
      '叩き募集',
      'スクショしないで',
      '消しといて',
      '誰にも言わないでね',
      'お金あげる',
      '課金してあげる',
    ],
    selfHarm: [
      '死にたい',
      '消えたい',
      '自殺したい',
      '生きていたくない',
      'リストカット',
      '自分を傷つけたい',
      'もう限界',
      'リスカ',
      'アムカ',
      'odした',
      'オーバードーズ',
      '市販薬大量',
      'メンヘラ',
      '病み垢',
      '死にたい気持ち',
      '生きるのしんどい',
      '誰も悲しまない',
      '首吊り',
    ],
    explicit: [
      '裸の写真送って',
      '服を脱いで',
      '体を見せて',
      'エロ写真',
      'エロ画像送って',
      '下着の写真',
      '抜ける画像',
      'エロ垢',
    ],
    violence: [
      '殺してやる',
      'ぶっ殺す',
      '刺してやる',
      'ナイフを持っていく',
      'ぶっ殺すぞ',
      '刺すぞ',
      'ナイフ持ってる',
      'みんなでシメる',
    ],
    bullying: [
      '誰もお前を好きじゃない',
      'みんなお前が嫌い',
      'お前は価値がない',
      '死ねばいいのに',
      '消えろ',
      'ハブる',
      'キモいんだよ',
      'うざいから消えて',
      'ぼっち',
      'デブ',
      'ブス',
      '死ねばいい',
      'いじめられてる',
    ],
    drugs: [
      '大麻買いたい',
      '覚醒剤',
      '脱法ドラッグ',
      '手押し',
      '野菜譲って',
      '大麻譲って',
      'グミ売って',
      '違法ハーブ',
      '処方薬売って',
    ],
    alcohol: ['飲みに行こう', '酔っ払う', '飲み会行こう', '一気飲み'],
    tobacco: [
      'タバコ買って',
      '電子タバコ',
      '電子タバコ買って',
      'ベイプ',
      '加熱式タバコ',
    ],
    gambling: ['オンラインカジノ', '賭けをしよう', 'ブックメーカー', '賭け麻雀'],
    profanity: ['死ね', 'くたばれ', 'クソ野郎', '死ねよ', 'クソが', 'カス', 'ゴミクズ'],
  },
  ambiguous: {
    selfHarm: ['もう限界', 'メンヘラ', '生きるのしんどい', '消えたい'],
    bullying: ['消えろ', 'ぼっち', 'デブ', 'ブス', 'ハブる'],
    alcohol: ['酔っ払う', '飲み会行こう'],
    tobacco: ['電子タバコ', 'ベイプ'],
    profanity: ['死ね', 'カス'],
    predator: ['サブ垢', '泊めて', '高収入即日'],
    drugs: ['野菜譲って', 'グミ売って'],
  },
};

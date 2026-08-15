/**
 * Release notes are authored in the Firebase console, so they need to allow a
 * little formatting (bold, colour, lists) without becoming a place where
 * arbitrary code runs inside the app's WebView. Anything that can execute or
 * load a remote resource is stripped; the rest is inlined into a fixed,
 * theme-coloured document.
 */

const STRIPPED_TAGS =
  /<\s*(script|iframe|object|embed|link|meta|style|form|input|base)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>|<\s*(script|iframe|object|embed|link|meta|style|form|input|base)\b[^>]*\/?>/gi;
/** Inline handlers (`onclick=…`) and `javascript:` URLs. */
const STRIPPED_ATTRS = /\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi;
const STRIPPED_JS_URL = /(href|src)\s*=\s*(?:"|')?\s*javascript:[^"'>]*/gi;

export function sanitizeUpdateNotes(notes: string): string {
  return notes
    .replace(STRIPPED_TAGS, '')
    .replace(STRIPPED_ATTRS, '')
    .replace(STRIPPED_JS_URL, '');
}

/** True when the notes carry markup worth handing to a WebView. */
export function hasHtmlMarkup(notes: string): boolean {
  return /<[a-z!/][\s\S]*>/i.test(notes);
}

export type UpdateNotesTheme = {
  text: string;
  textSecondary: string;
  accent: string;
};

/**
 * Posts its own height back so the RN side can size the WebView to the
 * content instead of reserving a fixed, usually-wrong box.
 */
export function buildUpdateNotesHtml(notes: string, theme: UpdateNotesTheme): string {
  // The app pins its layout to LTR for every language (see i18n/rtl.ts), so
  // the document does too — Arabic notes still shape correctly through the
  // engine's own bidi handling.
  return `<!DOCTYPE html>
<html dir="ltr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<style>
  html, body {
    margin: 0;
    padding: 0;
    background: transparent;
    -webkit-text-size-adjust: 100%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: ${theme.textSecondary};
    word-break: break-word;
    text-align: start;
  }
  b, strong { color: ${theme.text}; }
  a { color: ${theme.accent}; }
  h1, h2, h3, h4 { color: ${theme.text}; font-size: 15px; margin: 0 0 6px; }
  p { margin: 0 0 8px; }
  p:last-child, ul:last-child, ol:last-child { margin-bottom: 0; }
  ul, ol { margin: 0 0 8px; padding-inline-start: 18px; }
  li { margin-bottom: 4px; }
  img { max-width: 100%; height: auto; }
</style>
</head>
<body>
${sanitizeUpdateNotes(notes)}
<script>
  function postHeight() {
    var height = Math.ceil(document.body.scrollHeight);
    window.ReactNativeWebView && window.ReactNativeWebView.postMessage(String(height));
  }
  window.addEventListener('load', postHeight);
  window.addEventListener('resize', postHeight);
  setTimeout(postHeight, 60);
</script>
</body>
</html>`;
}

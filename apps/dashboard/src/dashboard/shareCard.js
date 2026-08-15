import { t as translate } from '@kidgate/i18n/web';
import { formatRange, reportPresentation } from './reportCopy.js';

/**
 * The weekly report as a picture a parent can send to the other parent.
 *
 * **Why a canvas and not a screenshot of the card.** Rasterising the DOM needs
 * either a third-party library or an SVG `foreignObject` round-trip that Safari
 * declines, and both produce a 1200-wide slab of dashboard chrome that reads as
 * a screenshot rather than as a report. This draws a portrait sheet sized for a
 * messaging app instead, from the same derived figures and the same sentences
 * the page renders — `reportView` computes them once and both readers of this
 * module take them as given.
 *
 * **Nothing here is a second styling system.** The palette is read off the
 * document's own `--kg-*` custom properties, which `@kidgate/web-ui/theme.js`
 * writes from `@kidgate/tokens`; a colour changed in the tokens changes this
 * image with no edit here. The literals below are the fallback for a canvas
 * drawn before the theme is applied, not a parallel palette.
 *
 * No PII beyond what the report already is: a family name, four figures and up
 * to three sentences. There is no child photo, no device name, no app history.
 */

const WIDTH = 1080;
const HEIGHT = 1350;
const MARGIN = 76;

/** Matches the token dark pack closely enough to be unremarkable if it shows. */
const FALLBACK = {
  background: '#101728',
  surface: '#161f36',
  text: '#f2f5fb',
  textSecondary: '#9fb0cd',
  primary: '#3987e5',
  success: '#199e70',
  warning: '#d9822b',
};

const TONE_TOKEN = {
  warning: 'warning',
  good: 'success',
  muted: 'textSecondary',
};

function readPalette() {
  if (typeof window === 'undefined') return { ...FALLBACK };
  const root = window.getComputedStyle(document.documentElement);
  const read = (name, fallback) => {
    const value = root.getPropertyValue(`--kg-${name}`).trim();
    // A `color-mix(…)` or an empty string is not something canvas accepts.
    return /^#|^rgb|^hsl/.test(value) ? value : fallback;
  };

  return {
    background: read('background', FALLBACK.background),
    surface: read('surface', FALLBACK.surface),
    text: read('text', FALLBACK.text),
    textSecondary: read('textSecondary', FALLBACK.textSecondary),
    primary: read('primary', FALLBACK.primary),
    success: read('success', FALLBACK.success),
    warning: read('warning', FALLBACK.warning),
  };
}

function readFontStack() {
  if (typeof window === 'undefined') return 'system-ui, sans-serif';
  const family = window.getComputedStyle(document.body).fontFamily;
  return family || 'system-ui, sans-serif';
}

function font(stack, size, weight = 400) {
  return `${weight} ${size}px ${stack}`;
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

/**
 * Greedy word wrap. Falls back to breaking mid-word only when a single word is
 * wider than the column — a package name or a URL, which the alternative would
 * run off the edge of the image.
 */
function wrapLines(ctx, text, maxWidth, maxLines) {
  const words = String(text ?? '')
    .split(/\s+/)
    .filter(Boolean);
  const lines = [];
  let line = '';

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth || !line) {
      line = candidate;
      continue;
    }
    lines.push(line);
    line = word;
    if (lines.length === maxLines) break;
  }

  if (lines.length < maxLines && line) lines.push(line);

  if (lines.length === maxLines && words.length > 0) {
    const last = lines[maxLines - 1];
    if (ctx.measureText(last).width > maxWidth) {
      let trimmed = last;
      while (trimmed.length > 1 && ctx.measureText(`${trimmed}…`).width > maxWidth) {
        trimmed = trimmed.slice(0, -1);
      }
      lines[maxLines - 1] = `${trimmed}…`;
    }
  }

  return lines;
}

/**
 * What the image says, decided before anything is drawn.
 *
 * Exported so the drawing code stays free of `t()` calls and of report shape,
 * and so a caller could render this model somewhere else — the one thing it
 * must never do is derive its own figures.
 */
export function buildShareModel(report, familyName) {
  const presentation = reportPresentation(report, familyName);

  return {
    ...presentation,
    range: formatRange(report.fromDate, report.toDate),
    // Three is what the layout below has room for. The digest already caps
    // findings at three, so this only bites if that cap ever changes.
    findings: presentation.findings.slice(0, 3),
    footer: 'kidgate.app',
  };
}

/** Draws the model onto a fresh canvas and returns it. */
export function drawShareCard(model) {
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  const ctx = canvas.getContext('2d');
  const palette = readPalette();
  const stack = readFontStack();
  const inner = WIDTH - MARGIN * 2;

  ctx.fillStyle = palette.background;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // A brand band rather than a logo file: the image has to be drawable with no
  // network fetch, or a share taken offline comes out with a hole in it.
  ctx.fillStyle = palette.primary;
  ctx.fillRect(0, 0, WIDTH, 10);

  let y = MARGIN + 24;

  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = palette.primary;
  ctx.font = font(stack, 30, 700);
  ctx.fillText('KidGate', MARGIN, y);

  ctx.fillStyle = palette.textSecondary;
  ctx.font = font(stack, 28, 500);
  ctx.textAlign = 'right';
  ctx.fillText(model.week, WIDTH - MARGIN, y);
  ctx.textAlign = 'left';

  y += 78;
  ctx.fillStyle = palette.text;
  ctx.font = font(stack, 62, 700);
  wrapLines(ctx, model.familyName, inner, 1).forEach(line => {
    ctx.fillText(line, MARGIN, y);
  });

  y += 46;
  ctx.fillStyle = palette.textSecondary;
  ctx.font = font(stack, 30, 400);
  ctx.fillText(`${model.title} · ${model.range}`, MARGIN, y);

  // ---- Hero panel ----
  y += 44;
  const heroHeight = 336;
  ctx.fillStyle = palette.surface;
  roundRect(ctx, MARGIN, y, inner, heroHeight, 32);
  ctx.fill();

  ctx.fillStyle = palette.textSecondary;
  ctx.font = font(stack, 28, 500);
  ctx.fillText(model.hero.label, MARGIN + 44, y + 66);

  ctx.fillStyle = palette.text;
  ctx.font = font(stack, 104, 700);
  ctx.fillText(model.hero.value, MARGIN + 44, y + 168);

  ctx.fillStyle =
    model.hero.direction === 'up'
      ? palette.warning
      : model.hero.direction === 'down'
        ? palette.success
        : palette.textSecondary;
  ctx.font = font(stack, 28, 600);
  ctx.fillText(model.hero.trend, MARGIN + 44, y + 218);

  // Two labelled bars, this week over last. The comparison is the one thing a
  // number alone cannot show, and it is why the week is worth a picture.
  const rowX = MARGIN + 44;
  const rowWidth = inner - 88;
  const labelWidth = 180;
  const valueWidth = 170;
  const trackX = rowX + labelWidth;
  const trackWidth = rowWidth - labelWidth - valueWidth;
  const peak = Math.max(
    model.compare.thisWeek.minutes,
    model.compare.lastWeek.minutes,
    1,
  );

  // Transparency through `globalAlpha` rather than an `#rrggbbaa` suffix: the
  // palette comes out of `getComputedStyle`, which is entitled to hand back
  // `rgb(…)`, and appending two hex digits to that paints nothing at all.
  const bar = (row, top, colour, opacity) => {
    ctx.save();
    ctx.font = font(stack, 24, 500);
    ctx.fillStyle = palette.textSecondary;
    ctx.fillText(row.label, rowX, top + 14);

    ctx.globalAlpha = 0.1;
    ctx.fillStyle = palette.text;
    roundRect(ctx, trackX, top, trackWidth, 16, 8);
    ctx.fill();

    ctx.globalAlpha = opacity;
    ctx.fillStyle = colour;
    roundRect(ctx, trackX, top, Math.max(16, (row.minutes / peak) * trackWidth), 16, 8);
    ctx.fill();

    ctx.globalAlpha = 1;
    ctx.fillStyle = palette.text;
    ctx.font = font(stack, 24, 600);
    ctx.textAlign = 'right';
    ctx.fillText(row.value, rowX + rowWidth, top + 14);
    ctx.textAlign = 'left';
    ctx.restore();
  };
  bar(model.compare.thisWeek, y + 250, palette.primary, 1);
  bar(model.compare.lastWeek, y + 292, palette.textSecondary, 0.45);

  // ---- Stat row ----
  y += heroHeight + 28;
  const gap = 20;
  const cardWidth = (inner - gap * (model.stats.length - 1)) / model.stats.length;
  model.stats.forEach((stat, index) => {
    const x = MARGIN + index * (cardWidth + gap);
    ctx.fillStyle = palette.surface;
    roundRect(ctx, x, y, cardWidth, 150, 26);
    ctx.fill();

    ctx.fillStyle = palette.text;
    ctx.font = font(stack, 48, 700);
    ctx.fillText(stat.value, x + 28, y + 76);

    ctx.fillStyle = palette.textSecondary;
    ctx.font = font(stack, 24, 500);
    wrapLines(ctx, stat.label, cardWidth - 56, 2).forEach((line, lineIndex) => {
      ctx.fillText(line, x + 28, y + 112 + lineIndex * 28);
    });
  });

  // ---- Findings ----
  y += 150 + 46;
  if (model.findings.length > 0) {
    ctx.fillStyle = palette.textSecondary;
    ctx.font = font(stack, 26, 600);
    ctx.fillText(translate('report.highlights').toUpperCase(), MARGIN, y);
    y += 40;

    model.findings.forEach(entry => {
      const colour = palette[TONE_TOKEN[entry.tone]] ?? palette.textSecondary;
      ctx.fillStyle = colour;
      ctx.beginPath();
      ctx.arc(MARGIN + 8, y + 12, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = palette.text;
      ctx.font = font(stack, 30, 400);
      const lines = wrapLines(ctx, entry.text, inner - 44, 2);
      lines.forEach((line, index) => {
        ctx.fillText(line, MARGIN + 36, y + 22 + index * 40);
      });
      y += lines.length * 40 + 24;
    });
  }

  ctx.fillStyle = palette.textSecondary;
  ctx.font = font(stack, 24, 500);
  ctx.fillText(model.footer, MARGIN, HEIGHT - MARGIN);

  return canvas;
}

function canvasBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      blob => (blob ? resolve(blob) : reject(new Error('toBlob failed'))),
      'image/png',
    );
  });
}

/**
 * Hand the image to the reader: the OS share sheet where there is one, a
 * download everywhere else.
 *
 * `navigator.share` with files is the phone case and is worth trying first —
 * it is the difference between "save this then find it in Files" and sending
 * it to the other parent in two taps. `canShare` has to be asked about the
 * actual file: a browser can have `share` for links and refuse attachments.
 */
export async function shareReportImage(model, fileName) {
  const canvas = drawShareCard(model);
  const blob = await canvasBlob(canvas);
  const file = new File([blob], fileName, { type: 'image/png' });

  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: model.familyName });
      return 'shared';
    } catch (error) {
      // A cancelled share sheet is a decision, not a failure to fall back from.
      if (error?.name === 'AbortError') return 'cancelled';
    }
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  // Revoked on the next frame: Safari has not finished reading the blob when
  // click() returns, and a URL revoked too early downloads an empty file.
  requestAnimationFrame(() => URL.revokeObjectURL(url));
  return 'downloaded';
}

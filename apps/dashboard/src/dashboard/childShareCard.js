import {
  font,
  readFontStack,
  readPalette,
  roundRect,
  shareCanvasImage,
  wrapLines,
} from './shareCard.js';

/**
 * One child's report as a picture a parent can send to the other parent.
 *
 * The web half of `apps/mobile`'s `ShareableChildReportCard`, and the same
 * decision it records: **the image is one card, not the screen.** A parent
 * forwarding this answers one question — where the week went — and the hour
 * band, the ranked apps and the day focus below the hero would make the picture
 * long without making it clearer.
 *
 * **Which second section belongs depends on the window**, exactly as on the
 * phone: Today shares the device split, because there is no "day" inside one
 * day; 7 and 30 days share the day-by-day column instead, because a device
 * split barely moves across four weeks.
 *
 * Everything under the layout — palette, font stack, wrapping, the share sheet
 * and its download fallback — is `shareCard.js`'s, imported rather than
 * repeated. The two images differ in what they say, never in how they are made.
 *
 * **No PII beyond what the report already is**: the child's name as the parent
 * typed it, a period label, figures, and device names. No photo, no app
 * history, no location.
 */

const WIDTH = 1080;
const HEIGHT = 1350;
const MARGIN = 76;

/**
 * What the image says, decided before anything is drawn.
 *
 * Takes already-formatted strings rather than minutes: the figures on screen
 * are formatted by `formatMinutes`, which is bound to the reader's language,
 * and an image that rounded them a second way would disagree with the page it
 * was taken from.
 */
export function buildChildShareModel({
  childName,
  periodLabel,
  heroLabel,
  heroValue,
  rangeNote,
  splitRows,
  stats,
  coverageNote,
  sectionTitle,
  devices,
  days,
  title,
}) {
  return {
    childName,
    periodLabel,
    heroLabel,
    heroValue,
    rangeNote: rangeNote ?? null,
    splitRows: splitRows ?? [],
    // Two wells is what the panel has room for, and two is what the phone
    // draws — a third tile whose usual value is "unknowable" charges rent for
    // a caveat.
    stats: (stats ?? []).slice(0, 2),
    coverageNote: coverageNote ?? null,
    sectionTitle,
    // Four rows fit under the hero without the card needing a scroll it cannot
    // have. A family with more devices than that is reading the page, not the
    // picture.
    devices: (devices ?? []).slice(0, 4),
    days: days ?? [],
    title,
    footer: 'kidgate.app',
  };
}

/** Draws the model onto a fresh canvas and returns it. */
export function drawChildShareCard(model) {
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
  ctx.fillText(model.periodLabel, WIDTH - MARGIN, y);
  ctx.textAlign = 'left';

  y += 78;
  ctx.fillStyle = palette.text;
  ctx.font = font(stack, 62, 700);
  wrapLines(ctx, model.childName, inner, 1).forEach(line => {
    ctx.fillText(line, MARGIN, y);
  });

  y += 46;
  ctx.fillStyle = palette.textSecondary;
  ctx.font = font(stack, 30, 400);
  ctx.fillText(model.title, MARGIN, y);

  // ---- Hero panel ----
  y += 44;
  const heroHeight = model.rangeNote ? 392 : 348;
  ctx.fillStyle = palette.surface;
  roundRect(ctx, MARGIN, y, inner, heroHeight, 32);
  ctx.fill();

  const heroTop = y;
  const padX = MARGIN + 44;

  ctx.fillStyle = palette.textSecondary;
  ctx.font = font(stack, 28, 500);
  ctx.fillText(model.heroLabel, padX, heroTop + 66);

  ctx.fillStyle = palette.text;
  ctx.font = font(stack, 96, 700);
  ctx.fillText(model.heroValue, padX, heroTop + 166);

  let heroY = heroTop + 212;

  /* The caveat travels with the figure. A hero that large with its qualifier
     left behind on the page is a figure shared without one. */
  if (model.rangeNote) {
    ctx.fillStyle = palette.textSecondary;
    ctx.font = font(stack, 25, 400);
    wrapLines(ctx, model.rangeNote, inner - 88, 2).forEach((line, index) => {
      ctx.fillText(line, padX, heroY + index * 32);
    });
    heroY += 74;
  }

  /* The two totals as two bars. The gap between them IS the finding — a minute
     on two screens counts twice once the devices are added up — so the image
     draws it rather than describing it. */
  const rowWidth = inner - 88;
  const widest = Math.max(1, ...model.splitRows.map(row => row.fraction));
  model.splitRows.forEach((row, index) => {
    const rowY = heroY + index * 62;

    ctx.fillStyle = palette.textSecondary;
    ctx.font = font(stack, 25, 500);
    ctx.fillText(row.label, padX, rowY);

    ctx.fillStyle = palette.text;
    ctx.font = font(stack, 27, 700);
    ctx.textAlign = 'right';
    ctx.fillText(row.value, WIDTH - padX, rowY);
    ctx.textAlign = 'left';

    ctx.fillStyle = palette.background;
    roundRect(ctx, padX, rowY + 14, rowWidth, 14, 7);
    ctx.fill();

    const fraction = Math.max(0.02, Math.min(1, row.fraction / widest));
    ctx.fillStyle = index === 0 ? palette.primary : palette.textSecondary;
    roundRect(ctx, padX, rowY + 14, rowWidth * fraction, 14, 7);
    ctx.fill();
  });

  // ---- The two wells ----
  y = heroTop + heroHeight + 40;
  if (model.stats.length > 0) {
    const gap = 24;
    const cardWidth = (inner - gap * (model.stats.length - 1)) / model.stats.length;
    model.stats.forEach((stat, index) => {
      const x = MARGIN + index * (cardWidth + gap);
      ctx.fillStyle = palette.surface;
      roundRect(ctx, x, y, cardWidth, 150, 26);
      ctx.fill();

      ctx.fillStyle = stat.tone === 'warning' ? palette.warning : palette.text;
      ctx.font = font(stack, 46, 700);
      ctx.fillText(stat.value, x + 28, y + 76);

      ctx.fillStyle = palette.textSecondary;
      ctx.font = font(stack, 24, 500);
      wrapLines(ctx, stat.label, cardWidth - 56, 2).forEach((line, lineIndex) => {
        ctx.fillText(line, x + 28, y + 112 + lineIndex * 28);
      });
    });
    y += 150 + 46;
  }

  // ---- Devices, or the days ----
  ctx.fillStyle = palette.textSecondary;
  ctx.font = font(stack, 26, 600);
  ctx.fillText(model.sectionTitle.toUpperCase(), MARGIN, y);
  y += 44;

  if (model.devices.length > 0) {
    /* A few lines, not the on-screen ring: a static image with one figure per
       device is read in one glance and needs no legend. */
    model.devices.forEach(row => {
      ctx.fillStyle = row.color;
      roundRect(ctx, MARGIN, y - 4, 16, 34, 6);
      ctx.fill();

      ctx.fillStyle = palette.text;
      ctx.font = font(stack, 30, 500);
      const [name] = wrapLines(ctx, row.name, inner - 300, 1);
      ctx.fillText(name ?? '', MARGIN + 40, y + 22);

      ctx.fillStyle = palette.textSecondary;
      ctx.font = font(stack, 28, 600);
      ctx.textAlign = 'right';
      ctx.fillText(`${row.value} · ${row.percent}%`, WIDTH - MARGIN, y + 22);
      ctx.textAlign = 'left';

      y += 56;
    });
  } else if (model.days.length > 0) {
    /* The window's shape. Bars against the busiest day, so the columns compare
       with each other — the same scale the page draws them at. */
    const chartHeight = 190;
    const peak = Math.max(1, ...model.days.map(day => day.minutes));
    const slot = inner / model.days.length;
    const barWidth = Math.max(6, Math.min(28, slot - 6));

    model.days.forEach((day, index) => {
      const height = Math.max(4, (day.minutes / peak) * chartHeight);
      const x = MARGIN + index * slot + (slot - barWidth) / 2;
      ctx.fillStyle = day.minutes > 0 ? palette.primary : palette.surface;
      roundRect(ctx, x, y + chartHeight - height, barWidth, height, 6);
      ctx.fill();
    });

    y += chartHeight + 34;
    ctx.fillStyle = palette.textSecondary;
    ctx.font = font(stack, 24, 500);
    /* Only the ends. Thirty labels under thirty bars is a row of digits nobody
       reads, and the two that matter are where the window starts and stops. */
    ctx.fillText(model.days[0].label, MARGIN, y);
    ctx.textAlign = 'right';
    ctx.fillText(model.days[model.days.length - 1].label, WIDTH - MARGIN, y);
    ctx.textAlign = 'left';
  }

  /* Last, and above the footer: a figure this large that was measured 41% of
     the time is a different figure, and the image must not be where that
     omission happens.

     Anchored to the footer, but never *above* what the section above it
     actually reached — the 30-day chart's end labels land within a few pixels
     of the fixed position, and the two printed on top of each other. */
  if (model.coverageNote) {
    ctx.fillStyle = palette.warning;
    ctx.font = font(stack, 25, 500);
    const noteY = Math.max(y + 40, HEIGHT - MARGIN - 78);
    wrapLines(ctx, model.coverageNote, inner, 2).forEach((line, index) => {
      ctx.fillText(line, MARGIN, noteY + index * 32);
    });
  }

  ctx.fillStyle = palette.textSecondary;
  ctx.font = font(stack, 24, 500);
  ctx.fillText(model.footer, MARGIN, HEIGHT - MARGIN);

  return canvas;
}

/** The child report, drawn and handed over. */
export function shareChildReportImage(model, fileName) {
  return shareCanvasImage(drawChildShareCard(model), fileName, model.childName);
}

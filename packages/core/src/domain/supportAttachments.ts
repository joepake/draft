import {
  SUPPORT_REPORT_ATTACHMENT_MAX_EDGE,
  SUPPORT_REPORT_MAX_ATTACHMENTS,
  SUPPORT_REPORT_MAX_ATTACHMENT_BYTES,
} from '@kidgate/schema/supportReport';

/**
 * What the picker hands back for one image, once the native side has already
 * resized it. `bytes` is the size of the resized temp file, not of the photo
 * in the library — everything here is decided on the post-resize number.
 */
export interface PickedImage {
  uri: string;
  width: number;
  height: number;
  bytes: number;
}

export type AttachmentRejectionReason =
  /** Still over the byte ceiling after the resize. Nothing more to try. */
  | 'tooLarge'
  /** The report already holds five, or this pick would push it over. */
  | 'overLimit'
  /** No uri, or a size the picker could not report. */
  | 'unreadable';

export interface AttachmentReview {
  accepted: PickedImage[];
  rejected: { image: PickedImage; reason: AttachmentRejectionReason }[];
}

/**
 * The target dimensions for a longest-edge fit, rounded to whole pixels.
 *
 * Kept here rather than assumed: the picker takes `maxWidth`/`maxHeight` as a
 * bounding box and preserves aspect ratio, so this is what it will produce and
 * what the attachment record should claim. Never scales up — a small image
 * stays small.
 */
export function fitWithin(
  width: number,
  height: number,
  maxEdge: number = SUPPORT_REPORT_ATTACHMENT_MAX_EDGE,
): { width: number; height: number } {
  const longest = Math.max(width, height);
  if (longest <= 0 || longest <= maxEdge) {
    return { width, height };
  }

  const scale = maxEdge / longest;
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
  };
}

/**
 * Split a pick into what may be attached and what may not, and say why.
 *
 * Both halves are returned rather than throwing on the first bad one: a parent
 * who picked five and had one refused should still send the other four, and
 * should be told which failed. Order is the order picked, so the message the
 * screen renders can name positions.
 *
 * `existingCount` is what the report already holds, so a second trip to the
 * picker cannot walk past the cap.
 */
export function reviewPickedAttachments(
  picked: PickedImage[],
  existingCount = 0,
): AttachmentReview {
  const accepted: PickedImage[] = [];
  const rejected: AttachmentReview['rejected'] = [];
  let room = Math.max(0, SUPPORT_REPORT_MAX_ATTACHMENTS - existingCount);

  for (const image of picked) {
    if (!image.uri || !Number.isFinite(image.bytes) || image.bytes <= 0) {
      rejected.push({ image, reason: 'unreadable' });
      continue;
    }
    if (image.bytes > SUPPORT_REPORT_MAX_ATTACHMENT_BYTES) {
      rejected.push({ image, reason: 'tooLarge' });
      continue;
    }
    if (room === 0) {
      rejected.push({ image, reason: 'overLimit' });
      continue;
    }

    accepted.push(image);
    room -= 1;
  }

  return { accepted, rejected };
}

/** Bytes rendered for an error a parent reads. `1.4 MB`, not `1468006`. */
export function formatAttachmentSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

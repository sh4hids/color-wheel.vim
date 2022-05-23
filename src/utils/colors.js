/* eslint-disable no-nested-ternary */
/* eslint-disable no-bitwise */
export function hexToRgb(hex = '') {
  let rgb;
  const color = hex.replace('#', '');

  if (color.length === 3) {
    const rgbArray = color.match(/.{1,1}/g);
    rgb = rgbArray.map((c) => 0x11 * parseInt(c, 16));
  } else if (color.length === 6) {
    const rgbArray = color.match(/.{1,2}/g);
    rgb = rgbArray.map((c) => parseInt(c, 16));
  } else {
    throw new Error('Invalid hex color');
  }

  return rgb;
}

export function rgbToHex(r = '', g = '', b = '') {
  if (r === undefined || g === undefined || b === undefined) {
    throw new Error('Invalid rgb color');
  }

  const rgb = (r << 16) | (g << 8) | (b << 0);
  return `#${(0x1000000 + rgb).toString(16).slice(1)}`;
}

export function rgbTox255(rgb = []) {
  if (!rgb || rgb.length !== 3) {
    throw new Error('Invalid rgb color');
  }

  const values = [0x00, 0x5f, 0x87, 0xaf, 0xd7, 0xff];
  const [ir, ig, ib] = rgb.map((c) =>
    c < 48 ? 0 : c < 115 ? 1 : parseInt((c - 35) / 40, 10)
  );
  const average = rgb.reduce((acc, curr) => acc + curr, 0) / 3;
  const grayIndex = average > 238 ? 23 : Math.floor((average - 3) / 10);
  const colorIndex = 36 * ir + 6 * ig + ib;
  const [r, g, b] = rgb;
  const cr = values[ir];
  const cg = values[ig];
  const cb = values[ib];
  const gv = 8 + 10 * grayIndex;
  const grayError = (gv - r) ** 2 + (gv - g) ** 2 + (gv - b) ** 2;
  const colorError = (cr - r) ** 2 + (cg - g) ** 2 + (cb - b) ** 2;

  return colorError <= grayError
    ? 16 + colorIndex
    : 232 + Math.round(grayIndex);
}

export function hslToRgb(h, s, l) {
  if (h === undefined || s === undefined || l === undefined) {
    throw new Error('Invalid hsl color');
  }

  let rgb = [0, 0, 0];
  const saturation = s / 100;
  const lightness = l / 100;

  if (saturation === 0) {
    rgb = [1, 1, 1];
  } else {
    const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
    const hue = h / 60;
    const x = c * (1 - Math.abs((hue % 2) - 1));
    const m = lightness - c / 2;

    if (hue <= 1) {
      rgb = [c, x, 0];
    } else if (hue <= 2) {
      rgb = [x, c, 0];
    } else if (hue <= 3) {
      rgb = [0, c, x];
    } else if (hue <= 4) {
      rgb = [0, x, c];
    } else if (hue <= 5) {
      rgb = [x, 0, c];
    } else if (hue <= 6) {
      rgb = [c, 0, x];
    }
    rgb = [rgb[0] + m, rgb[1] + m, rgb[2] + m];
  }

  rgb = rgb.map((c) => Math.round(c * 255));

  return rgb;
}

export function getColorRgb(color, palette = {}) {
  if (typeof color === 'string' && color.startsWith('#')) {
    return hexToRgb(color);
  }

  const c = palette[color];

  if (!c) {
    throw new Error(`Color for ${color} not found`);
  }

  if (Array.isArray(c) || /^hsl\((\d+), (\d+), (\d+)\)$/.test(c)) {
    let hslColor = c;

    if (/^hsl\((\d+), (\d+), (\d+)\)$/.test(c)) {
      hslColor = c.match(/\d+/g).map(Number);
    }

    return hslToRgb(...hslColor);
  }

  if (typeof c === 'string' && c.startsWith('#')) {
    return hexToRgb(c);
  }

  throw new Error('Invalid color');
}

export function getColor(color, palette = {}) {
  return rgbToHex(getColorRgb(color, palette));
}

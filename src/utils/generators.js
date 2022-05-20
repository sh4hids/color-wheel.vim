import { getColorRgb, rgbToHex, rgbTox255 } from './colors';

export function hiColor(kind, color, palette = {}) {
  const result = {};
  let rgb = [];
  let gColor = 'NONE';
  let cColor = 'NONE';

  if (color === '.') {
    return result;
  }

  if (kind === 'sp' && !color) {
    return result;
  }

  if (color && color !== '-') {
    rgb = getColorRgb(color, palette);
    gColor = rgbToHex(...rgb);
    cColor = rgbTox255(rgb);
  }

  result[`gui${kind}`] = gColor;

  if (kind !== 'sp') {
    result[`cterm${kind}`] = cColor;
  }

  return result;
}

export function hiStyle(style) {
  const result = {};
  const attributes = {
    b: 'bold',
    u: 'underline',
    r: 'reverse',
    i: 'italic',
    c: 'undercurl',
    s: 'standout',
  };
  let fontStyle = 'NONE';

  if (style === '.') {
    return result;
  }

  if (style && style !== '-') {
    fontStyle = style
      .split('')
      .map((s) => attributes[s])
      .join(',');
  }

  result.gui = fontStyle;
  result.cterm = fontStyle;

  return result;
}

export function toHiString(name, params = []) {
  return `hi ${name} ${params
    .map(
      (param) =>
        `${Object.keys(param)
          .map((key) => `${key}=${param[key]}`)
          .join(' ')}`
    )
    .join(' ')}`;
}

export function generateColor(name, config = '', palette = {}) {
  if (!config) {
    return '';
  }

  const params = [];
  const [fg, bg, style, sp] = config.split(' ');
  params.push(hiColor('fg', fg, palette));
  params.push(hiColor('bg', bg, palette));
  params.push(hiStyle(style));
  params.push(hiColor('sp', sp, palette));

  return toHiString(name, params);
}

export function generateHeader(info = {}) {
  return `
" Maintainer: ${info.author}

set background=${info.background}
hi clear

if exists('syntax_on')
  syntax reset
endif

let g:colors_name='${info.name}'
`;
}

export function generateTheme(data = {}) {
  let theme = generateHeader(data.info);

  Object.keys(data.highlights).forEach((key) => {
    theme += `\n${generateColor(key, data.highlights[key], data.palette)}`;
  });

  return theme;
}

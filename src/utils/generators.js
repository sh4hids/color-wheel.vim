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

export function generateLualineTheme(data = {}) {
  return `
  local ${data.info.name} = {
    inactive = {
      a = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.inactive.a.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.inactive.a.bg, data.palette)
  )}' ${
    data.lualine.inactive.a.gui
      ? `, gui = '${data.lualine.inactive.a.gui}'`
      : ''
  } },
      b = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.inactive.b.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.inactive.b.bg, data.palette)
  )}' },
      c = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.inactive.c.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.inactive.c.bg, data.palette)
  )}' },
    },
    normal = {
      a = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.normal.a.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.normal.a.bg, data.palette)
  )}' ${
    data.lualine.normal.a.gui ? `, gui = '${data.lualine.normal.a.gui}'` : ''
  } },
      b = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.normal.b.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.normal.b.bg, data.palette)
  )}' },
      c = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.normal.c.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.normal.c.bg, data.palette)
  )}' },
    },
    insert = {
      a = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.insert.a.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.insert.a.bg, data.palette)
  )}' ${
    data.lualine.insert.a.gui ? `, gui = '${data.lualine.insert.a.gui}'` : ''
  } },
      b = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.insert.b.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.insert.b.bg, data.palette)
  )}' },
      c = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.insert.c.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.insert.c.bg, data.palette)
  )}' },
    },
    visual = {
      a = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.visual.a.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.visual.a.bg, data.palette)
  )}' ${
    data.lualine.visual.a.gui ? `, gui = '${data.lualine.visual.a.gui}'` : ''
  } },
      b = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.visual.b.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.visual.b.bg, data.palette)
  )}' },
      c = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.visual.c.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.visual.c.bg, data.palette)
  )}' },
    },
    replace = {
      a = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.replace.a.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.replace.a.bg, data.palette)
  )}' ${
    data.lualine.replace.a.gui ? `, gui = '${data.lualine.replace.a.gui}'` : ''
  } },
      b = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.replace.b.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.replace.b.bg, data.palette)
  )}' },
      c = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.replace.c.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.replace.c.bg, data.palette)
  )}' },
    },
    command = {
      a = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.command.a.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.command.a.bg, data.palette)
  )}' ${
    data.lualine.command.a.gui ? `, gui = '${data.lualine.command.a.gui}'` : ''
  } },
      b = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.command.b.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.command.b.bg, data.palette)
  )}' },
      c = { fg = '${rgbToHex(
        ...getColorRgb(data.lualine.command.c.fg, data.palette)
      )}', bg = '${rgbToHex(
    ...getColorRgb(data.lualine.command.c.bg, data.palette)
  )}' },
    },
  }

  return ${data.info.name};
  `;
}

export function generateWeztermTheme(data = {}) {
  return `
  ["${data.info.name}"] = {
      foreground = '${rgbToHex(
        ...getColorRgb(data.wezterm.foreground, data.palette)
      )}',
      background = '${rgbToHex(
        ...getColorRgb(data.wezterm.background, data.palette)
      )}',
      cursor_bg = '${rgbToHex(
        ...getColorRgb(data.wezterm.cursor_bg, data.palette)
      )}',
      cursor_border = '${rgbToHex(
        ...getColorRgb(data.wezterm.cursor_border, data.palette)
      )}',
      cursor_fg = '${rgbToHex(
        ...getColorRgb(data.wezterm.cursor_fg, data.palette)
      )}',
      selection_bg = '${rgbToHex(
        ...getColorRgb(data.wezterm.selection_bg, data.palette)
      )}',
      selection_fg = '${rgbToHex(
        ...getColorRgb(data.wezterm.selection_fg, data.palette)
      )}',
      ansi = [${data.wezterm.ansi.map(
        (item) => `'${rgbToHex(...getColorRgb(item, data.palette))}'`
      )}],
      brights = [${data.wezterm.brights.map(
        (item) => `'${rgbToHex(...getColorRgb(item, data.palette))}'`
      )}]
    }
  `;
}

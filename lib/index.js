import { getSourceThemes, hexToRgb, rgbToHex, rgbTox255 } from './utils';

(async () => {
  const themes = await getSourceThemes();
  console.log(themes);
  themes.forEach((theme) => {
    const fgRgb = hexToRgb(theme.palette.fg);
    const bgRgb = hexToRgb(theme.palette.bg);
    console.log('FG (rgb):', fgRgb);
    console.log('BG (rgb):', bgRgb);
    console.log('FG (hex):', rgbToHex(fgRgb[0], fgRgb[1], fgRgb[2]));
    console.log('BG (hex):', rgbToHex(bgRgb[0], bgRgb[1], bgRgb[2]));
    console.log('FG (x255):', rgbTox255(fgRgb));
    console.log('BG (x255):', rgbTox255(bgRgb));
  });
})();

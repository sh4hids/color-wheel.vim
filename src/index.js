/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import fs from 'fs/promises';
import path from 'path';
import {
  getSourceThemes,
  generateTheme,
  generateLualineTheme,
  generateWeztermTheme,
} from './utils';

(async () => {
  const themes = await getSourceThemes();
  const weztermThemes = [];
  for (let i = 0; i < themes.length; i++) {
    const theme = themes[i];
    const color = generateTheme(theme);
    await fs.writeFile(
      path.join(__dirname, '../colors', `${theme.info.name}.vim`),
      color,
      { encoding: 'utf-8' }
    );
    if (theme.lualine) {
      const lualineTheme = generateLualineTheme(theme);
      await fs.writeFile(
        path.join(__dirname, '../lua/lualine/themes', `${theme.info.name}.lua`),
        lualineTheme,
        { encoding: 'utf-8' }
      );
    }
    if (theme.wezterm) {
      const weztermTheme = generateWeztermTheme(theme);
      weztermThemes.push(weztermTheme);
    }
    console.log(`Theme '${theme.info.name}.vim' created successfully`);
  }
  if (weztermThemes.length) {
    const content = `
    local color_schemes = {
      ${weztermThemes.join(',')}
    }

    return color_schemes;
    `;
    await fs.writeFile(
      path.join(__dirname, '../lua', `wezterm_colors.lua`),
      content,
      { encoding: 'utf-8' }
    );
  }
})();

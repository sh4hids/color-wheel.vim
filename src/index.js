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
      await fs.writeFile(
        path.join(__dirname, '../extras/wezterm', `${theme.info.name}.toml`),
        weztermTheme,
        { encoding: 'utf-8' }
      );
    }
    console.log(`Theme '${theme.info.name}.vim' created successfully`);
  }
})();

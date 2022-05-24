import fs from 'fs/promises';
import path from 'path';
import { getSourceThemes, generateTheme, generateLualineTheme } from './utils';

(async () => {
  const themes = await getSourceThemes();
  themes.forEach(async (theme) => {
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
    console.log(`Theme '${theme.info.name}.vim' created successfully`);
  });
})();

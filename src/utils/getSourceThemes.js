/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import fs from 'fs/promises';
import path from 'path';

async function getSourceThemes() {
  const data = [];
  const srcDir = path.join(__dirname, '../themes');
  const files = await fs.readdir(srcDir);

  for (let i = 0, { length } = files; i < length; i++) {
    const content = await fs.readFile(path.join(srcDir, files[i]), 'utf-8');
    data.push(JSON.parse(content));
  }

  return data;
}

export default getSourceThemes;

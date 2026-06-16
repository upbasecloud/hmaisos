import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const DIR = 'public/images/portfolio';
const MAX_WIDTH = 1600;

const files = await readdir(DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') continue;

  const filepath = join(DIR, file);
  const { size } = await stat(filepath);

  // Only compress files larger than 500KB
  if (size < 500_000) continue;

  const img = sharp(filepath);
  const meta = await img.metadata();

  const width = Math.min(meta.width, MAX_WIDTH);

  if (ext === '.png') {
    // Convert large PNGs to JPEG for web
    const jpegPath = filepath.replace('.png', '.jpg');
    await img
      .resize(width, null, { withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true })
      .toFile(jpegPath);

    const { size: newSize } = await stat(jpegPath);
    console.log(`${file} → ${file.replace('.png', '.jpg')}: ${Math.round(size/1024)}KB → ${Math.round(newSize/1024)}KB`);
  } else {
    // Re-compress JPEGs
    const tmpPath = filepath + '.tmp';
    await img
      .resize(width, null, { withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true })
      .toFile(tmpPath);

    const { size: newSize } = await stat(tmpPath);
    if (newSize < size) {
      await import('fs/promises').then(fs => fs.rename(tmpPath, filepath));
      console.log(`${file}: ${Math.round(size/1024)}KB → ${Math.round(newSize/1024)}KB`);
    } else {
      await import('fs/promises').then(fs => fs.unlink(tmpPath));
      console.log(`${file}: already optimal`);
    }
  }
}

console.log('Done!');

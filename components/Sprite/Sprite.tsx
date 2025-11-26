import path from 'path';
import fs from 'fs';

export default function Sprite() {
  const spritePath = path.join(process.cwd(), 'public', 'symbol-defs.svg');
  const spriteContent = fs.readFileSync(spritePath, 'utf8');
  return (
    <div
      style={{ display: 'none' }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: spriteContent }}
    />
  );
}

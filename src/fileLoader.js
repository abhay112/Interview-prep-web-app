// src/fileLoader.js
export const files = import.meta.glob(
  '/src/components/**/*.{js,jsx,ts,tsx}', // add more patterns as needed
  { as: 'raw', eager: true }
);
// If you have utils too:
Object.assign(files, import.meta.glob(
  '/src/utils/**/*.{js,jsx,ts,tsx}',
  { as: 'raw', eager: true }
));

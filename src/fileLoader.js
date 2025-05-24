// src/fileLoader.js
export const files = import.meta.glob(
  '/src/components/**/*.{js,jsx,ts,tsx}',
  { as: 'raw', eager: true }
);
// Add other folders as needed
Object.assign(files, import.meta.glob(
  '/src/hooks/**/*.{js,jsx,ts,tsx}',
  { as: 'raw', eager: true }
));
Object.assign(files, import.meta.glob(
  '/src/data/**/*.{js,jsx,ts,tsx}',
  { as: 'raw', eager: true }
));

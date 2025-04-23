// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // tailwindcss: {}, // <-- MUST be commented out or removed
    autoprefixer: {},
  },
};

export default config;
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 0
      }
    ]
  ]
}

export default config

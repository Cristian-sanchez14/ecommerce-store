/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
      },
      minHeight: {
        '1/2': '50%',
      }, 
      spacing: {
        '128': '32rem',
      }
    },
    minWidth: {
      '1/2': '50%',
    }
  },
  plugins: []
}

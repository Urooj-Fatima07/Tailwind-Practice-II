module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': '#f5f5f7',
        'accent': '#0071e3',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/path/to/your/hero-image.jpg")',
      },
    },
  },
  plugins: [],
}

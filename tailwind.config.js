module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Include the paths for your files
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

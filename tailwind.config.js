module.exports = {
  content: ['./src/**/*.{html,js,vue,ts,tsx,jsx}'],
  theme: {
    colors: {
      primaryBlue: '#267dff',
      headerBlack: '#121212',
      darkBlack: '#111827',
      textBlack: '#374151',
      ash: '#6b72b0',
      lightAsh: '#9ca3af',
    },
    fontFamily: {
      spotify: ['Spotify', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'blogShadow':
          '0px 2px 4px -2px rgba(16, 24, 40, 0.10), 0px 4px 6px -1px rgba(16, 24, 40, 0.10)',
      },
    },
  },
}
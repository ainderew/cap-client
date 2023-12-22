/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        highlightRight: 'url(/highlight-dashboard.png)',
        highlightLeft: 'url(/img-head-2.webp)'
      },
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        primary: '#1BA7EC',
        secondary: '#48D7D7',
        tertiary: '#797EF5',
        accent: '#1E2F97',
        success: '#5CB85B',
        error: '#F74142',
        warning: '#F7B530',
        notificationAlert: '#F74142'
      }
    }
  },
  plugins: []
}

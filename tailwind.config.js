/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#0B63FF',
          600: '#0546CC',
          700: '#041A40',
        },
        navy: '#041A40',
        gray: {
          50: '#F5F7FA',
          100: '#F5F7FA',
          300: '#E6EDF8',
          900: '#1f2937',
        }
      },
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        'sans': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '56px' }],
        'display-lg': ['36px', { lineHeight: '44px' }],
        'display-md': ['28px', { lineHeight: '36px' }],
      }
    },
  },
  plugins: [],
}
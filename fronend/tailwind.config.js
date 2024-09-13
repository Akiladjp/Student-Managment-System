/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define custom utility classes here
      button: {
        '.btn-blue': {
          backgroundColor: '#2563EB', // bg-blue-600
          color: '#FFFFFF',           // text-white
          fontWeight: 'bold',
          padding: '0.25rem 0.75rem', // px-3 py-1
          borderRadius: '0.5rem',     // rounded-lg
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-md
        },
      },
    },
  },
  plugins: [],
}

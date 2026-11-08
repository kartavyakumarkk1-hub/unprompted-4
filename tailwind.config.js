/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#06110e', panel:'#0d1916', line:'#1b3029', mint:'#19d995', muted:'#8b9b94' }, fontFamily: { sans:['DM Sans','sans-serif'], serif:['Playfair Display','serif'] }, boxShadow: { glow:'0 0 32px rgba(25,217,149,.16)' } } }, plugins: [] }

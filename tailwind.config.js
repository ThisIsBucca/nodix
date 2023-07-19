/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'vue':'#002B36',
        'urojo':'#71F6BA',
        'jinja_one' :'#F6F3FE',
        'papo' :'#8367D5',
        'kicard' :'#252547',
        'mseti-green' : '#246507',
        'mseti-bg': '#E5E7EB',
        'mseti-yellow' : '#C6B500',
        'mseti-white' : '#FFFFFF',
        'safety-icon': '#A1C49C',
        'safety-bg': '#3B3B3B',
        'safety-1': '#595F58',
        'safety-2': '#4A4A4A',
        'page1-bg':'#181028',
        'page1-btn':'#804EDD',
        'radial':'#111F6B'

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:['light','dark','cupcake','dracula','forest','garden','night','retro','coffee','fantasy','cymk','lemonade','autumn','business','black','luxury','aqua','lofi','wireframe','synthwave']
},

}

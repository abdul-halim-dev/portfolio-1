/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: { 
			"sectionbg":"#eaedf2",
			"active":"#d9832e",
			"hoverout":"#090a0c",
			"overly":"#555a64",
			"common":"#ffffff",
			"para":"#5b5c5d",
			"bgDark":"#0f172a",
			"textColor":"#768499",
			"deactive":"#6366f1",
			"whiteColor":"#e5e7e8",
			"cardColor":"#1e293bb"
			 
  		}
  	}
  },
//   plugins: [require("tailwindcss-animate")]
}
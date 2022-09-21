/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.jsx"],
	theme: {
		extend: {
			// Used in step 2 for Tailwind... not implemented yet 😉
			colors: {
				background: "white",
				emphasized: "rgb(71 85 105)",
				inverted: "white",
				logo: "rgb(29, 155, 240)",
				medium: "rgb(100, 116, 139)",
				primary: "black",
				subtle: "rgb(243 244 246)",
			},
		},
	},
};

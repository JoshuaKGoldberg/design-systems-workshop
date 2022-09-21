import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Intro } from "./Intro";
import { Native } from "./native";
import { Native0Start } from "./native/0-start";
import { Native1TokensAColor } from "./native/1-tokens/a-color";
import { Native1TokensBTypography } from "./native/1-tokens/b-typography";
import { Native1TokensCSizing } from "./native/1-tokens/c-sizing";
import { Native2ComponentsAAtoms } from "./native/2-components/a-atoms";
import { Native2ComponentsBMolecules } from "./native/2-components/b-molecules";
import { Native3DocumentationATypeScript } from "./native/3-documentation/a-typescript";
import { Tailwind } from "./tailwind";
import { Tailwind0Start } from "./tailwind/0-start";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Intro />,
	},
	{
		path: "/native",
		element: <Native root />,
	},
	{
		path: "/native/0-start",
		element: <Native0Start />,
	},
	{
		path: "/native/1-tokens/a-color",
		element: <Native1TokensAColor />,
	},
	{
		path: "/native/1-tokens/b-typography",
		element: <Native1TokensBTypography />,
	},
	{
		path: "/native/1-tokens/c-sizing",
		element: <Native1TokensCSizing />,
	},
	{
		path: "/native/2-components/a-atoms",
		element: <Native2ComponentsAAtoms />,
	},
	{
		path: "/native/2-components/b-molecules",
		element: <Native2ComponentsBMolecules />,
	},
	{
		path: "/native/3-documentation/a-typescript",
		element: <Native3DocumentationATypeScript />,
	},
	{
		path: "/tailwind",
		element: <Tailwind root />,
	},
	{
		path: "/tailwind/0-start",
		element: <Tailwind0Start />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

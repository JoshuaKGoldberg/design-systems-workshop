import { Native } from "./native";
import { Tailwind } from "./tailwind";

export function Intro() {
	return (
		<main>
			<h1>Design Systems Workshop</h1>
			<p>Hello, world! You have this workshop running locally -- great!</p>
			<Native />
			<Tailwind />
		</main>
	);
}

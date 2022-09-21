import { Link } from "react-router-dom";

export function Tailwind({ root }) {
	const Heading = root ? "h1" : "h2";

	return (
		<>
			<Heading>Tailwind Version</Heading>
			<ol>
				<li>
					<Link to="/tailwind/0-start">Start</Link>
				</li>
			</ol>
		</>
	);
}

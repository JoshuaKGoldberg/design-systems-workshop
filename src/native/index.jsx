import { Link } from "react-router-dom";

export function Native({ root }) {
	const Heading = root ? "h1" : "h2";

	return (
		<>
			<Heading>Native Version</Heading>
			<ol>
				<li>
					<Link to="/native/0-start">Start</Link>
				</li>
			</ol>
		</>
	);
}

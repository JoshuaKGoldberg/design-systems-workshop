import "./index.css";

import { LeftNav } from "./LeftNav";
import { MiddleArea } from "./MiddleArea";
import { RightColumn } from "./RightColumn";

export function Tailwind0Start() {
	return (
		<div className="flex justify-center">
			<LeftNav />
			<MiddleArea />
			<RightColumn />
		</div>
	);
}

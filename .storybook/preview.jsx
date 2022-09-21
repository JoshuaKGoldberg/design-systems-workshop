import "../src/tailwind/0-start/index.css";
import { Root } from "../src/native/3-documentation/b-storybook/components";

function decorateStory(Story) {
	return (
		<Root>
			<Story />
		</Root>
	);
}

export const decorators = [decorateStory];

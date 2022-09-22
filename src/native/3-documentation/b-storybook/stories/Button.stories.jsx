import { Button } from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	args: {
		color: "primary",
		children: "Click me!",
		size: "medium",
	},
	component: Button,
	title: "Button",
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
	color: "secondary",
};

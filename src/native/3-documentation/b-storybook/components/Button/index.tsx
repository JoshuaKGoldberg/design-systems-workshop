import cx from "classnames";

import styles from "./index.module.css";

const colors = {
	primary: styles.colorPrimary,
	secondary: styles.colorSecondary,
};

const sizes = {
	medium: styles.sizeMedium,
	large: styles.sizeLarge,
};

export type ButtonColor = keyof typeof colors;

export type ButtonSize = keyof typeof sizes;

export interface ButtonProps
	extends Omit<React.HTMLAttributes<HTMLButtonElement>, "size"> {
	color: ButtonColor;
	size: ButtonSize;
}

export function Button({ className, color, size, ...props }: ButtonProps) {
	return (
		<button
			className={cx(styles.button, colors[color], sizes[size], className)}
			{...props}
		/>
	);
}

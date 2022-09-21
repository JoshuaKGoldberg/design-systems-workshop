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

export function Button({ className, color, size, ...props }) {
	return (
		<button
			className={cx(styles.button, colors[color], sizes[size], className)}
			{...props}
		/>
	);
}

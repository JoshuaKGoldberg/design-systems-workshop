import cx from "classnames";

import styles from "./index.module.css";

const sizes = {
	tiny: styles.tiny,
	small: styles.small,
	medium: styles.sizeMedium,
};

export function Icon({ className, size, ...props }) {
	return (
		<svg
			className={cx(sizes[size], className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			{...props}
		/>
	);
}

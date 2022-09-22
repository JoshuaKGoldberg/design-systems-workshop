import cx from "classnames";

import styles from "./index.module.css";

const sizes = {
	small: styles.sizeSmall,
	medium: styles.sizeMedium,
	large: styles.sizeLarge,
};

export function ProfilePhoto({ className, bordered, size, ...props }) {
	return (
		<img
			className={cx(
				styles.profilePhoto,
				bordered && styles.bordered,
				sizes[size],
				// styles[size],
				// styles[`size${size[0].toUpperCase() + size.slice(1)}`],
				className
			)}
			{...props}
		/>
	);
}

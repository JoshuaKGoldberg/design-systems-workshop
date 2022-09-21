import cx from "classnames";

import styles from "./index.module.css";

const sizes = {
	tiny: styles.sizeTiny,
	small: styles.sizeSmall,
	medium: styles.sizeMedium,
	large: styles.sizeLarge,
};

export function ProfilePhoto({ bordered, className, size, ...props }) {
	return (
		<img
			className={cx(
				styles.profilePhoto,
				bordered && styles.bordered,
				sizes[size],
				className
			)}
			{...props}
		/>
	);
}

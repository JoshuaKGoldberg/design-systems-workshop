import cx from "classnames";

import styles from "./index.module.css";

export function SuggestedContent({ children, className, heading, ...props }) {
	return (
		<div className={cx(styles.suggestedContent, className)} {...props}>
			<h2 className={styles.heading}>{heading}</h2>
			{children}
		</div>
	);
}

import cx from "classnames";

import styles from "./index.module.css";

export interface SuggestedContentProps
	extends React.HTMLAttributes<HTMLDivElement> {
	heading: React.ReactNode;
}

export function SuggestedContent({
	children,
	className,
	heading,
	...props
}: SuggestedContentProps) {
	return (
		<div className={cx(styles.suggestedContent, className)} {...props}>
			<h2 className={styles.heading}>{heading}</h2>
			{children}
		</div>
	);
}

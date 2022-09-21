import cx from "classnames";

import styles from "./index.module.css";

export type RootProps = React.HTMLAttributes<HTMLDivElement>;

export function Root({ className, ...props }: RootProps) {
	return <div className={cx(styles.root, className)} {...props} />;
}

import cx from "classnames";

import styles from "./index.module.css";

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement>;

export function Link({ className, ...props }: LinkProps) {
	return <a className={cx(styles.link, className)} {...props} />;
}

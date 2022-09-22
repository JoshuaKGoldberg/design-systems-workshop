import cx from "classnames";

import styles from "./index.module.css";

export function Link({ className, ...props }) {
	return <a className={cx(styles.link, className)} {...props} />;
}

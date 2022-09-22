import cx from "classnames";

import styles from "./index.module.css";

export function ContentPreview({ className, ...props }) {
	return <a className={cx(styles.contentPreview, className)} {...props} />;
}

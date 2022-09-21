import cx from "classnames";

import styles from "./index.module.css";

export type ContentPreviewProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function ContentPreview({ className, ...props }: ContentPreviewProps) {
	return <a className={cx(styles.contentPreview, className)} {...props} />;
}

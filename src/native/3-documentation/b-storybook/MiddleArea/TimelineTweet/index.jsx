import cx from "classnames";

import { Tweet } from "../../components";
import styles from "./index.module.css";

export function TimelineTweet({ link, ...props }) {
	return (
		<Tweet
			{...props}
			link={
				link && {
					contents: (
						<div className={styles.link}>
							{link.image && (
								<img alt="" className={styles.linkImage} src={link.image} />
							)}
							<div
								className={cx(
									styles.linkContents,
									link.image && styles.linkContentsWithImage
								)}
							>
								{link.contents}
							</div>
						</div>
					),
					url: link.url,
				}
			}
		/>
	);
}

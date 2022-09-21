import { PinIcon, Tweet } from "../../components";
import styles from "./index.module.css";

export function PinnedTweet({ link, ...props }) {
	return (
		<Tweet
			{...props}
			link={
				<>
					<img alt="" className={styles.linkImage} src={link.image} />
					<div className={styles.linkContents}>{link.contents}</div>
				</>
			}
			prefix={
				<>
					<PinIcon className={styles.pinIcon} size="tiny" />
					<span>Pinned Tweet</span>
				</>
			}
		/>
	);
}

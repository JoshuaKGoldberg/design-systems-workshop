import cx from "classnames";

import { LikesIcon } from "./icons/likesIcon.jsx";
import RepliesIcon from "./icons/repliesIcon.jsx";
import { RetweetsIcon } from "./icons/retweetsIcon.jsx";
import { ShareIcon } from "./icons/shareIcon.jsx";
import styles from "./index.module.css";

export function Tweet({
	contents,
	likes,
	link,
	name,
	photo,
	date,
	replies,
	retweets,
	username,
}) {
	return (
		<div className={styles.tweet}>
			<div className={styles.tweetContents}>
				<img alt="" className={styles.photo} src={photo} />
				<div>
					<div className={styles.tweeter}>
						<span className={styles.tweeterName}>{name}</span>
						<span>@{username}</span> · <span>{date}</span>
					</div>
					{contents}
					{link && (
						<a className={styles.link} href={link.href}>
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
						</a>
					)}
					<div className={styles.actionButtons}>
						{[
							["replies", RepliesIcon, replies],
							["retweets", RetweetsIcon, retweets],
							["likes", LikesIcon, likes],
							["share", ShareIcon],
						].map(([key, RepliesIcon, contents]) => (
							<span className={styles.actionButton} key={key}>
								<RepliesIcon className={styles.actionButtonIcon} />
								{contents && ` ${contents}`}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

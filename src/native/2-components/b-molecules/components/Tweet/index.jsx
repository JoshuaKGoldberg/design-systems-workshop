import cx from "classnames";

import { ContentPreview } from "../ContentPreview";
import { LikesIcon, RepliesIcon, RetweetsIcon, ShareIcon } from "../Icon/icons";
import { ProfilePhoto } from "../ProfilePhoto";
import styles from "./index.module.css";

export function Tweet({
	className,
	contents,
	likes,
	link,
	name,
	photo,
	prefix,
	date,
	replies,
	retweets,
	username,
}) {
	return (
		<div className={cx(styles.tweet, className)}>
			{prefix && <div className={styles.prefixArea}>{prefix}</div>}
			<div className={styles.tweetContents}>
				<ProfilePhoto
					alt=""
					className={styles.photo}
					size="medium"
					src={photo}
				/>
				<div>
					<div className={styles.tweeter}>
						<span className={styles.tweeterName}>{name}</span>
						<span>@{username}</span> · <span>{date}</span>
					</div>
					{contents}
					{link && (
						<ContentPreview className={styles.link} href={link.url}>
							{link}
						</ContentPreview>
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

import {
	ContentPreview,
	LikesIcon,
	PinIcon,
	ProfilePhoto,
	RepliesIcon,
	RetweetsIcon,
	ShareIcon,
} from "../../components";
import styles from "./index.module.css";

export function PinnedTweet({
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
			<div className={styles.pinArea}>
				<PinIcon className={styles.pinIcon} size="tiny" />
				<span>Pinned Tweet</span>
			</div>
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
							<img alt="" className={styles.linkImage} src={link.image} />
							<div className={styles.linkContents}>{link.contents}</div>
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

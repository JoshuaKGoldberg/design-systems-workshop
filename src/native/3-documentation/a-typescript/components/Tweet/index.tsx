import cx from "classnames";
import { ContentPreview } from "../ContentPreview";

import { LikesIcon, RepliesIcon, RetweetsIcon, ShareIcon } from "../Icon/icons";
import { ProfilePhoto } from "../ProfilePhoto";

import styles from "./index.module.css";

export interface TweetLink {
	contents: React.ReactNode;
	url: string;
}

export interface TweetProps {
	className: string;
	contents: React.ReactNode;
	likes: number;
	link: TweetLink;
	name: string;
	photo: string;
	prefix?: React.ReactNode;
	date: string;
	replies: number;
	retweets: number;
	username: string;
}

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
}: TweetProps) {
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
							{link.contents}
						</ContentPreview>
					)}
					<div className={styles.actionButtons}>
						{(
							[
								["replies", RepliesIcon, replies],
								["retweets", RetweetsIcon, retweets],
								["likes", LikesIcon, likes],
								["share", ShareIcon],
							] as const
						).map(([key, Icon, contents]) => (
							<span className={styles.actionButton} key={key}>
								<Icon className={styles.actionButtonIcon} size="medium" />
								{contents && ` ${contents}`}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

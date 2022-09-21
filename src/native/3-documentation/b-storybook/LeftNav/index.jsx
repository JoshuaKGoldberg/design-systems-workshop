import josh from "../../../../images/josh.jpg";
import {
	BookmarksIcon,
	Button,
	ExploreIcon,
	HomeIcon,
	ListsIcon,
	MessagesIcon,
	NotificationsIcon,
	ProfileIcon,
	ProfilePhoto,
} from "../components";
import styles from "./index.module.css";
import twitterLogo from "./twitterLogo.svg";

export function LeftNav() {
	return (
		<nav className={styles.leftNav}>
			<div className={styles.leftNavContents}>
				<h1>
					<img
						alt="Twitter logo"
						className={styles.twitterLogo}
						src={twitterLogo}
					/>
				</h1>
				<div className={styles.buttonsArea}>
					{[
						[HomeIcon, "Home"],
						[ExploreIcon, "Explore"],
						[NotificationsIcon, "Notifications"],
						[MessagesIcon, "Messages"],
						[BookmarksIcon, "Bookmarks"],
						[ListsIcon, "Lists"],
						[ProfileIcon, "Profile"],
					].map(([Icon, text]) => (
						<button className={styles.button} key={text}>
							<Icon alt="" className={styles.buttonIcon} size="medium" /> {text}
						</button>
					))}
				</div>
				<Button className={styles.tweetButton} color="primary" size="large">
					Tweet
				</Button>
				<div className={styles.aboutMeArea}>
					<div className={styles.aboutMeContents}>
						<ProfilePhoto
							alt=""
							className={styles.aboutMeProfilePhoto}
							size="medium"
							src={josh}
						/>
						<span className={styles.aboutMeName}>Josh Goldberg</span>
						<span>@JoshuaKGoldberg</span>
					</div>
				</div>
			</div>
		</nav>
	);
}

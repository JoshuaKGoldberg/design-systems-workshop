import josh from "../../../images/josh.jpg";
import bookmarksIcon from "./bookmarksIcon.svg";
import exploreIcon from "./exploreIcon.svg";
import homeIcon from "./homeIcon.svg";
import styles from "./index.module.css";
import listsIcon from "./listsIcon.svg";
import messagesIcon from "./messagesIcon.svg";
import notificationsIcon from "./notificationsIcon.svg";
import profileIcon from "./profileIcon.svg";
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
						[homeIcon, "Home"],
						[exploreIcon, "Explore"],
						[notificationsIcon, "Notifications"],
						[messagesIcon, "Messages"],
						[bookmarksIcon, "Bookmarks"],
						[listsIcon, "Lists"],
						[profileIcon, "Profile"],
					].map(([icon, text]) => (
						<button className={styles.button} key={text}>
							<img alt="" className={styles.buttonIcon} src={icon} /> {text}
						</button>
					))}
				</div>
				<button className={styles.tweetButton}>Tweet</button>
				<div className={styles.aboutMeArea}>
					<div className={styles.aboutMeContents}>
						<img alt="" className={styles.aboutMeProfilePhoto} src={josh} />
						<span className={styles.aboutMeName}>Josh Goldberg</span>
						<span>@JoshuaKGoldberg</span>
					</div>
				</div>
			</div>
		</nav>
	);
}

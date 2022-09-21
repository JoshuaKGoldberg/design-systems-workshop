import iappreciateyou from "../../../images/iappreciateyou.jpeg";
import learningtsbook from "../../../images/learningtsbook.png";
import reactindia from "../../../images/reactindia.png";
import tseslint from "../../../images/tseslint.png";
import whatdoyoumeme from "../../../images/whatdoyoumeme.jpeg";
import whee from "../../../images/whee.jpeg";
import whynotboth from "../../../images/whynotboth.jpeg";
import yay from "../../../images/yay.jpeg";
import yesssss from "../../../images/yesssss.jpeg";
import styles from "./index.module.css";

export function RightColumn() {
	return (
		<div className={styles.rightColumn}>
			<input
				className={styles.searchInput}
				type="text"
				placeholder="Search Twitter"
			/>
			<div className={styles.mediaGrid}>
				{[
					["Baby yoda saying 'Whee!'", whee],
					["Meme girl saying 'Why not both?'", whynotboth],
					["Evil raccoon making evil hand gestures saying 'yesssss'", yesssss],
					["DJ Khaled 'I Appreciate You' gif meme", iappreciateyou],
					["Cute cat cartoon saying 'yay'", yay],
					["What Do You Meme? cards on a table", whatdoyoumeme],
				].map(([alt, src]) => (
					<div
						className={styles.mediaImage}
						key={alt}
						style={{ backgroundImage: `url('${src}')` }}
					/>
				))}
			</div>
			<div className={styles.youMightLike}>
				<h2 className={styles.youMightLikeHeading}>You might like</h2>
				{[
					["Learning TypeScript", "LearningTSBook", learningtsbook],
					["TypeScript-ESLint", "tseslint", tseslint],
					["React India", "react_india", reactindia],
				].map(([name, username, image]) => (
					<div key={name} className={styles.mightLikeItem}>
						<img alt="" className={styles.mightLikeImage} src={image} />
						<div className={styles.mightLikeInfo}>
							<div className={styles.mightLikeName}>{name}</div>
							<div className={styles.mightLikeUsername}>@{username}</div>
						</div>
						<button className={styles.mightLikeFollow}>Follow</button>
					</div>
				))}
			</div>
			<div className={styles.whatsHappening}>
				<h2 className={styles.whatsHappeningHeading}>What&apos;s happening</h2>
				{[
					[
						"News · Yesterday",
						"Developer studies show TypeScript is #1 programming language worldwide",
					],
					[
						"Trending in India",
						"Everybody should sponsor open source maintainers, and here's why",
					],
					[
						"Trending in United States",
						"Josh is a pretty cool guy but not very creative with fake trending headlines",
					],
				].map(([prefix, content]) => (
					<div className={styles.happeningItem} key={content}>
						<div className={styles.happeningItemFloater}>
							<span className={styles.happeningItemDots}>···</span>
						</div>
						<div className={styles.happeningItemPrefix}>{prefix}</div>
						<div className={styles.happeningItemContents}>{content}</div>
					</div>
				))}
				<button className={styles.happeningShowMoreButton}>Show more</button>
			</div>
			<div className={styles.extraLinks}>
				<div className={styles.extraLink}>
					{[
						"Terms of Service",
						"Privacy Policy",
						"Cookie Policy",
						"Accessibility",
						"Ads info",
					].map((text) => (
						<span key={text}>{text}</span>
					))}
				</div>
				No copyright. This is a fake website made by Josh Goldberg for a design
				systems workshop.
			</div>
		</div>
	);
}

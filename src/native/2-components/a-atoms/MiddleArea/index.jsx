import josh from "../../../../images/josh.jpg";
import tseslint from "../../../../images/tseslint.png";
import {
	BalloonIcon,
	CalendarIcon,
	Link,
	LinkIcon,
	LocationIcon,
	ProfilePhoto,
} from "../components";
import banner from "./banner.jpg";
import styles from "./index.module.css";
import { PinnedTweet } from "./PinnedTweet";
import { Tweet } from "./Tweet";

console.log({ CalendarIcon });

export function MiddleArea() {
	return (
		<main className={styles.middleArea}>
			<h2 className={styles.topHeading}>
				<span className={styles.topHeadingName}>Josh Goldberg 💖</span>
				<span className={styles.topHeadingTweets}>9,001 Tweets</span>
			</h2>
			<div className={styles.bannerArea}>
				<img
					className={styles.bannerImage}
					alt="Profile banner: Josh presenting a TypeScript Type Cycle slide"
					src={banner}
				/>
			</div>
			<ProfilePhoto
				alt="Profile photo of Josh"
				bordered
				className={styles.profileImage}
				size="large"
				src={josh}
			/>
			<div className={styles.profileContents}>
				<div className={styles.profileInfo}>
					<span className={styles.profileInfoName}>Josh Goldberg 💖</span>
					<span className={styles.profileInfoUsername}>@JoshuaKGoldberg</span>
				</div>
				<div className={styles.profileDescription}>
					Open source maintainer+consultant+speaker. ✍️{" "}
					<Link href="/">@LearningTSBook</Link> buy my book! Do it! Buy! Now!
					<br />
					<br />
					👨‍💻 <Link href="/">@tseslint</Link>
					<br />
					🕰 <Link href="/">@Codecademy</Link> <Link href="/">@microsoft</Link> (
					<Link href="/">@sway</Link>
					)
					<br />
					💍 <Link href="/">@mariahcody55</Link>
				</div>
				<div className={styles.profileDetails}>
					{[
						{ icon: LocationIcon, text: "Brooklyn, NY" },
						{
							icon: LinkIcon,
							text: (
								<Link href="https://hi.joshuakgoldberg.com">
									hi.joshuakgoldberg.com
								</Link>
							),
						},
						{ icon: BalloonIcon, text: "Born September 13" },
						{ icon: CalendarIcon, text: "Joined June 2014" },
					].map(({ icon: Icon, text }) => (
						<div className={styles.profileDetail} key={text}>
							<Icon alt="" className={styles.profileDetailIcon} size="small" />
							{text}
						</div>
					))}
				</div>
				<div className={styles.profileStats}>
					<div>
						<span className={styles.profileStatNumber}>1,234</span>{" "}
						<span className={styles.profileStatValue}>Following</span>
					</div>
					<div>
						<span className={styles.profileStatNumber}>9,001</span>{" "}
						<span className={styles.profileStatValue}>Followers</span>
					</div>
				</div>
				<div className={styles.profileFollowers}>
					{[josh, josh, josh].map((src, i) => (
						<ProfilePhoto
							alt="Josh's profile photo"
							bordered
							className={styles.profileFollowerImage}
							key={`${src}-${i}`}
							size="tiny"
							src={src}
						/>
					))}
					<span className={styles.profileFollowersText}>
						Followed by Anders, Daniel, Ryan, and 1234 others you follow
					</span>
				</div>
			</div>
			<PinnedTweet
				contents={
					<>
						I&apos;ve been a full time (ish) open source maintainer for half a
						year now. Jotted down some thoughts here:{" "}
						<Link
							className={styles.anchor}
							href="https://blog.joshuakgoldberg.com/six-months-of-full-time-open-source"
						>
							blog.joshuakgoldberg.com/six-months-of-...
						</Link>
						<br />
						<br />
						tl;dr: it&apos;s a ton of fun, and while not sustainable yet,
						I&apos;m hopeful it will be eventually! 🙃
					</>
				}
				date="Sep 7"
				link={{
					contents: (
						<>
							<span className={styles.contentsLight}>
								blog.joshuakgoldberg.com
							</span>
							<span className={styles.contentsLink}>
								Six Months of Full Time Open Source
							</span>
							<span className={styles.contentsLight}>
								What it&apos;s like to quit your job and try to work on open
								source tooling full time.
							</span>
						</>
					),
					image:
						"https://pbs.twimg.com/card_img/1572864098089549824/JFZJgKWE?format=jpg&name=360x360",
					url: "https://blog.joshuakgoldberg.com",
				}}
				likes={123}
				name="Josh Goldberg 💖"
				photo={josh}
				replies={456}
				retweets={789}
				username="JoshuaKGoldberg"
			/>
			<br />
			<Tweet
				contents={
					<>
						You can tell I tweeted this because there are a bunch of emojis. But
						also, really happy about this work &amp; article landing!{" "}
						<Link href="https://typescript-eslint.io">
							typescript-eslint.io
						</Link>{" "}
						is getting better by the month. 🚀
					</>
				}
				date="Sep 19"
				link={{
					contents: (
						<div className={styles.linkContents}>
							<div className={styles.linkContentsArea}>
								<ProfilePhoto
									alt=""
									className={styles.linkTweeterImage}
									size="tiny"
									src={tseslint}
								/>
								<div className={styles.linkTweeterLink}>
									<span className={styles.linkTweeter}>TypeScript-ESLint</span>
									<span>@tseslint</span> · <span>Sep 19</span>
								</div>
							</div>
							<div>
								TypeScript ESLint has a blog now! 📝
								<br />
								<br />
								Check out our first article: ✨ Automated Rule Docs With
								Docusaurus and Remark ✨.
								<br />
								<br />
								https://typescript-eslint.io/blog/automated-...
								<br />
								<br />
								s/o to @JoshuaKGoldberg for writing & @SidaChen63 for editing!
								❤️‍🔥
							</div>
						</div>
					),
					url: "https://typescript-eslint.io/blog/automated-rule-docs-with-docusaurus-and-remark",
				}}
				likes={123}
				name="Josh Goldberg 💖"
				photo={josh}
				replies={456}
				retweets={789}
				username="JoshuaKGoldberg"
			/>
		</main>
	);
}

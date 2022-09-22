import josh from "../../../images/josh.jpg";
import tseslint from "../../../images/tseslint.png";
import balloonIcon from "./balloonIcon.svg";
import banner from "./banner.jpg";
import calendarIcon from "./calendarIcon.svg";
import linkIcon from "./linkIcon.svg";
import locationIcon from "./locationIcon.svg";
import { PinnedTweet } from "./PinnedTweet";
import { Tweet } from "./Tweet";

export function MiddleArea() {
	return (
		<main className="w-[600px] border-x border-slate-100">
			<h2 className="flex flex-col px-4 py-2">
				<span className="text-lg font-bold">Josh Goldberg 💖</span>
				<span className="text-sm text-slate-500">9,001 Tweets</span>
			</h2>
			<div className="relative h-[200px] w-full overflow-hidden">
				<img
					className="absolute h-full max-w-none"
					alt="Profile banner: Josh presenting a TypeScript Type Cycle slide"
					src={banner}
				/>
			</div>
			<img
				alt="Profile photo of Josh"
				className="relative -mt-24 ml-4 h-40 w-40 rounded-full border-4 border-solid border-white"
				src={josh}
			/>
			<div className="border-b border-slate-100 px-4 py-2">
				<div className="flex flex-col">
					<span className="text-lg font-bold">Josh Goldberg 💖</span>
					<span className="text-sm text-slate-500">@JoshuaKGoldberg</span>
				</div>
				<div className="py-2 text-sm">
					Open source maintainer+consultant+speaker. ✍️{" "}
					<a className="text-[#1d9bf0]" href="/">
						@LearningTSBook
					</a>{" "}
					buy my book! Do it! Buy! Now!
					<br />
					<br />
					👨‍💻{" "}
					<a className="text-[#1d9bf0]" href="/">
						@tseslint
					</a>
					<br />
					🕰{" "}
					<a className="text-[#1d9bf0]" href="/">
						@Codecademy
					</a>{" "}
					<a className="text-[#1d9bf0]" href="/">
						@microsoft
					</a>{" "}
					(
					<a className="text-[#1d9bf0]" href="/">
						@sway
					</a>
					)
					<br />
					💍{" "}
					<a className="text-[#1d9bf0]" href="/">
						@mariahcody55
					</a>
				</div>
				<div className="flex flex-wrap text-sm text-slate-500">
					{[
						{ icon: locationIcon, text: "Brooklyn, NY" },
						{
							icon: linkIcon,
							text: (
								<a href="https://hi.joshuakgoldberg.com">
									hi.joshuakgoldberg.com
								</a>
							),
						},
						{ icon: balloonIcon, text: "Born September 13" },
						{ icon: calendarIcon, text: "Joined June 2014" },
					].map(({ icon, text }) => (
						<div className="mr-4 flex items-center" key={icon}>
							<img alt="" className="mr-1 h-6 w-6" src={icon}></img>
							{text}
						</div>
					))}
				</div>
				<div className="flex gap-4 py-4 text-sm">
					<div>
						<span className="font-bold">1,234</span>{" "}
						<span className="text-slate-500">Following</span>
					</div>
					<div>
						<span className="font-bold">9,001</span>{" "}
						<span className="text-slate-500">Followers</span>
					</div>
				</div>
				<div className="pl-4 pb-4">
					{[josh, josh, josh].map((src, i) => (
						<img
							alt="Josh's profile photo"
							key={`${src}-${i}`}
							className="-mr-8 inline-block h-6 w-6 rounded-full border border-solid border-white"
							src={src}
						/>
					))}
					<span className="ml-14 text-xs text-slate-500">
						Followed by Anders, Daniel, Ryan, and 1234 others you follow
					</span>
				</div>
			</div>
			<PinnedTweet
				contents={
					<>
						I&apos;ve been a full time (ish) open source maintainer for half a
						year now. Jotted down some thoughts here:{" "}
						<a
							className="text-[#1d9bf0]"
							href="https://blog.joshuakgoldberg.com/six-months-of-full-time-open-source"
						>
							blog.joshuakgoldberg.com/six-months-of-...
						</a>
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
							<span className="text-slate-500">blog.joshuakgoldberg.com</span>
							<span className="my-1">Six Months of Full Time Open Source</span>
							<span className="text-slate-500">
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
						<a className="text-[#1d9bf0]" href="https://typescript-eslint.io">
							typescript-eslint.io
						</a>{" "}
						is getting better by the month. 🚀
					</>
				}
				date="Sep 19"
				link={{
					contents: (
						<div className="text-sm">
							<div className="mb-2 flex items-center">
								<img
									alt=""
									className="mr-2 h-6 w-6 rounded-full"
									src={tseslint}
								/>
								<div className="text-slate-500">
									<span className="mr-1 font-bold text-black">
										TypeScript-ESLint
									</span>
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

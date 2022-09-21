import iappreciateyou from "../../../images/iappreciateyou.jpeg";
import learningtsbook from "../../../images/learningtsbook.png";
import reactindia from "../../../images/reactindia.png";
import tseslint from "../../../images/tseslint.png";
import whatdoyoumeme from "../../../images/whatdoyoumeme.jpeg";
import whee from "../../../images/whee.jpeg";
import whynotboth from "../../../images/whynotboth.jpeg";
import yay from "../../../images/yay.jpeg";
import yesssss from "../../../images/yesssss.jpeg";

export function RightColumn() {
	return (
		<div className="relative flex h-full w-96 flex-col pt-2 pl-6">
			<input
				className="rounded-full bg-slate-100 px-6 py-3 text-slate-800"
				type="text"
				placeholder="Search Twitter"
			/>
			<div className="mt-4 grid h-48 grid-cols-3 grid-rows-2 gap-1 overflow-hidden rounded-xl">
				{[
					["Baby yoda saying 'Whee!'", whee],
					["Meme girl saying 'Why not both?'", whynotboth],
					["Evil raccoon making evil hand gestures saying 'yesssss'", yesssss],
					["DJ Khaled 'I Appreciate You' gif meme", iappreciateyou],
					["Cute cat cartoon saying 'yay'", yay],
					["What Do You Meme? cards on a table", whatdoyoumeme],
				].map(([alt, src]) => (
					<div
						className="h-full w-full bg-cover bg-center"
						key={alt}
						style={{ backgroundImage: `url('${src}')` }}
					/>
				))}
			</div>
			<div className="mt-6 rounded-xl bg-gray-100 px-4 py-3">
				<h2 className="mb-6 text-xl font-extrabold">You might like</h2>
				{[
					["Learning TypeScript", "LearningTSBook", learningtsbook],
					["TypeScript-ESLint", "tseslint", tseslint],
					["React India", "react_india", reactindia],
				].map(([name, username, image]) => (
					<div key={name} className="mb-6 flex items-center">
						<img alt="" className="mr-3 h-12 w-12 rounded-full" src={image} />
						<div className="mb-1 w-full">
							<div className="mr-2 font-bold">{name}</div>
							<div className="text-slate-500">@{username}</div>
						</div>
						<button className="rounded-full bg-black py-2 px-6 text-sm font-bold text-white">
							Follow
						</button>
					</div>
				))}
			</div>
			<div className="mt-6 rounded-xl bg-gray-100 px-4 py-3 text-sm">
				<h2 className="mb-6 text-xl font-extrabold">What&apos;s happening</h2>
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
					<div className="mb-6" key={content}>
						<div className="float-right">
							<span className="text-lg font-bold">···</span>
						</div>
						<div className="text-slate-600">{prefix}</div>
						<div className="font-bold">{content}</div>
					</div>
				))}
				<button className="mb-1 text-[#1d9bf0]">Show more</button>
			</div>
			<div className="p-2 text-sm text-slate-500">
				<div className="flex flex-wrap gap-x-2 gap-y-1 pb-2">
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

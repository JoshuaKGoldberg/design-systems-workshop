import { LikesIcon } from "./icons/likesIcon.jsx";
import { PinIcon } from "./icons/pinIcon.jsx";
import RepliesIcon from "./icons/repliesIcon.jsx";
import { RetweetsIcon } from "./icons/retweetsIcon.jsx";
import { ShareIcon } from "./icons/shareIcon.jsx";

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
		<div className="px-4">
			<div className="flex items-center pb-1 pt-2 text-xs font-bold text-slate-500">
				<PinIcon className="ml-12 mr-3 h-4 w-4" />
				<span>Pinned Tweet</span>
			</div>
			<div className="flex text-sm">
				<img alt="" className="mr-3 h-12 w-12 rounded-full" src={photo} />
				<div>
					<div className="mb-1 text-slate-500">
						<span className="mr-2 font-bold text-black">{name}</span>
						<span className="">@{username}</span> · <span>{date}</span>
					</div>
					{contents}
					{link && (
						<a
							className="relative mt-4 block overflow-hidden rounded-xl border"
							href={link.url}
						>
							<img alt="" className="absolute -ml-14 h-full" src={link.image} />
							<div className="relative ml-32 flex flex-col bg-white py-4 pl-4">
								{link.contents}
							</div>
						</a>
					)}
					<div className="flex justify-between text-slate-500">
						{[
							["replies", RepliesIcon, replies],
							["retweets", RetweetsIcon, retweets],
							["likes", LikesIcon, likes],
							["share", ShareIcon],
						].map(([key, RepliesIcon, contents]) => (
							<span className="flex items-center gap-1 py-2" key={key}>
								<RepliesIcon className="h-4 w-4" />
								{contents && ` ${contents}`}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

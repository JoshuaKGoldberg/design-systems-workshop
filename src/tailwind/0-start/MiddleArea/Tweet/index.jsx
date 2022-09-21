import { LikesIcon } from "./icons/likesIcon.jsx";
import RepliesIcon from "./icons/repliesIcon.jsx";
import { RetweetsIcon } from "./icons/retweetsIcon.jsx";
import { ShareIcon } from "./icons/shareIcon.jsx";

export function Tweet({
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
			<div className="flex text-sm">
				<img alt="" className="mr-3 h-12 w-12 rounded-full" src={photo} />
				<div>
					<div className="mb-1 text-slate-500">
						<span className="mr-2 font-bold text-black">{name}</span>
						<span>@{username}</span> · <span>{date}</span>
					</div>
					{contents}
					{link && (
						<a
							className="relative mt-4 block overflow-hidden rounded-xl border"
							href={link.href}
						>
							{link.image && (
								<img
									alt=""
									className="absolute -ml-14 h-full"
									src={link.image}
								/>
							)}
							<div
								className={`relative ${
									link.image ? "ml-32" : ""
								} flex flex-col bg-white py-4 pl-4`}
							>
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

import josh from "../../../images/josh.jpg";
import bookmarksIcon from "./bookmarksIcon.svg";
import exploreIcon from "./exploreIcon.svg";
import homeIcon from "./homeIcon.svg";
import listsIcon from "./listsIcon.svg";
import messagesIcon from "./messagesIcon.svg";
import notificationsIcon from "./notificationsIcon.svg";
import profileIcon from "./profileIcon.svg";
import twitterLogo from "./twitterLogo.svg";

export function LeftNav() {
	return (
		<nav className="relative w-64">
			<div className="fixed flex h-full w-64 flex-col">
				<h1>
					<img
						alt="Twitter logo"
						className="ml-2 mb-4 h-12 w-12 p-2"
						src={twitterLogo}
					/>
				</h1>
				<div className="flex flex-col justify-start">
					{[
						[homeIcon, "Home"],
						[exploreIcon, "Explore"],
						[notificationsIcon, "Notifications"],
						[messagesIcon, "Messages"],
						[bookmarksIcon, "Bookmarks"],
						[listsIcon, "Lists"],
						[profileIcon, "Profile"],
					].map(([icon, text]) => (
						<button
							className="mt-2 mb-4 flex items-center rounded-full px-4"
							key={text}
						>
							<img alt="" className="mr-4 h-8 w-8" src={icon} /> {text}
						</button>
					))}
				</div>
				<button className="mt-6 mr-8 rounded-full bg-[#1d9bf0] py-4 font-bold text-white">
					Tweet
				</button>
				<div className="flex h-full items-end">
					<div className="my-6 mx-4 grid grid-cols-[64px_100%] grid-rows-[24px_24px]">
						<img
							alt=""
							className="row-span-2 h-12 w-12 rounded-full"
							src={josh}
						/>
						<span className="font-bold">Josh Goldberg</span>
						<span>@JoshuaKGoldberg</span>
					</div>
				</div>
			</div>
		</nav>
	);
}

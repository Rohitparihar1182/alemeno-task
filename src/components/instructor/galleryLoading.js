export default function Loading() {
	return (
		<div className="mt-4 grid grid-cols-1 gap-6 xl:gap-8 md:grid-cols-2">
			{Array.from({ length: 5 }).map((_, index) => (
				<SingleSkeleto key={index} />
			))}
		</div>
	);
}

function SingleSkeleto() {
	return (
		<div className="shadow-lg flex flex-col gap-2 mb-8 animate-pulse">
			<div className="block relative w-full pb-[56.25%] bg-gray-700 rounded-tl-md rounded-tr-md overflow-hidden"></div>
			<div className="mt-3 flex">
				<span className="py-[6px] px-4 bg-gray-700 text-xs rounded-[50px] font-semibold w-1/3 h-6"></span>
			</div>
			<div className="flex gap-2 text-xs mt-3 tracking-wide">
				<p className="bg-gray-700 w-1/4 h-4"></p>
				<span>&#x2022;</span>
				<p className="bg-gray-700 w-1/4 h-4"></p>
			</div>
			<div className="block mt-3">
				<div className="bg-gray-700 text-[18px] font-bold w-3/4 h-6"></div>
			</div>
			<div className="block mt-2">
				<div className="bg-gray-700 w-full h-4 mb-1"></div>
				<div className="bg-gray-700 w-full h-4 mb-1"></div>
				<div className="bg-gray-700 w-full h-4"></div>
			</div>
		</div>
	);
}

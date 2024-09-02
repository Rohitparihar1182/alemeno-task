import React from "react";

const Loading = () => {
	return (
		<div className="max-w-5xl mt-20 mx-auto p-4">
			<div className="flex flex-col md:flex-row gap-6 animate-pulse">
				
				<div className="md:w-[40%]">
					<div className="bg-neutral-800 h-72 rounded-2xl w-full"></div>
				</div>

				<div className="md:w-[60%]">
					<div className="flex items-center flex-wrap gap-4">
						<div className="bg-neutral-800 h-8 w-1/2 rounded mb-2"></div>
						<div className="bg-neutral-800 h-4 w-1/4 rounded mb-2"></div>
					</div>

					<div className="bg-neutral-800 h-4 w-1/3 rounded mb-6"></div>

					<div className="mt-6">
						<div className="bg-neutral-800 h-4 w-1/4 rounded mb-2"></div>
						<div className="flex gap-2 items-center mt-2">
							<div className="bg-neutral-800 h-6 w-10 rounded"></div>
							<div className="flex gap-1 items-center">
								{[...Array(5)].map((_, index) => (
									<div
										key={index}
										className="bg-neutral-800 h-6 w-6 rounded-full"
									></div>
								))}
							</div>
						</div>
					</div>

					<div className="mt-6">
						<div className="bg-neutral-800 h-4 w-1/4 rounded mb-4"></div>
						<div className="bg-neutral-800 h-4 w-2/3 rounded mb-2"></div>
						<div className="bg-neutral-800 h-4 w-2/3 rounded mb-2"></div>
						<div className="bg-neutral-800 h-4 w-2/3 rounded mb-2"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;

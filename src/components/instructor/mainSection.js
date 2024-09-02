import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const MainSection = ({ instructor }) => {
    const rating = getRandomRating() / 2;
	return (
		<div className="flex flex-col md:flex-row gap-6">
			<div className="md:w-[40%]">
				<img
					className="rounded-2xl items-center w-full h-full object-cover"
					src={instructor.image}
					alt={instructor.name}
				/>
			</div>
			<div className="md:w-[60%]">
				<div className="flex items-center flex-wrap gap-4">
					<h3 className="text-2xl font-bold ">{instructor.name}</h3>
					<div className="flex text-xs font-bold text-neutral-200/90 items-center gap-2">
						<FaLocationDot />
						<span>New York, USA</span>
					</div>
				</div>
				<div className="mt-2">
					<p className="text-blue-500 font-bold text-sm">
						Professional Teacher
					</p>
				</div>
				<div className="mt-6">
					<p className="uppercase tracking-widest text-xs text-neutral-200/80 font-bold">
						ranking
					</p>
					<div className="mt-2 flex flex-wrap items-center gap-2">
						<p className="font-bold text-2xl">{rating}</p>
						<div className="flex gap-1 items-center">
							{Array.from({ length: rating }, (_, index) => (
								<FaStar key={index} className="text-blue-500" />
							))}
							{Array.from(
								{ length: 5 - Math.floor(rating) },
								(_, index) => (
									<FaStar
										key={index}
										className="text-white"
									/>
								)
							)}
						</div>
					</div>
				</div>
				<div className="mt-6">
					<p className="uppercase tracking-widest text-xs text-neutral-200/80 font-bold">
						about
					</p>
					<div className="mt-2 flex flex-wrap items-center gap-2">
						<p className="font-bold text-neutral-100 text-sm">
							Email:{" "}
							<span className="font-normal">abc@gmail.com</span>
						</p>
					</div>
					<div className="mt-1 flex flex-wrap items-center gap-2">
						<p className="font-bold text-neutral-100 text-sm">
							Phone:{" "}
							<span className="font-normal">+1 123 456 789</span>
						</p>
					</div>
					<div className="mt-1 flex flex-wrap items-center gap-2">
						<p className="font-bold text-neutral-100 text-sm">
							Site:{" "}
							<span className="font-normal lowercase">
								{(instructor?.name + "").replace(/\s+/g, "")}
								.com
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
function getRandomRating() {
	return Math.floor(Math.random() * 8 + 12) / 2;
}
export default MainSection;

import { useMemo, useState } from "react";
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";

import { getPaginationPages } from "../../../util/helpers";

const MAX_COURSES_PER_PAGE = 10;

export default function CoursesGallery({ courses }) {
	const [page, setPage] = useState(0);
	console.log(courses);

	const numberOfPages = useMemo(
		() => Math.ceil(courses.length / MAX_COURSES_PER_PAGE),
		[courses]
	);

	const filteredCourses = useMemo(() => {
		let i = MAX_COURSES_PER_PAGE * page;
		const newFilteredCourses = [];
		while (i < courses.length && i < MAX_COURSES_PER_PAGE * (page + 1)) {
			newFilteredCourses.push(courses[i++]);
		}
		return newFilteredCourses;
	}, [courses, page]);

	const maxPages = useMemo(
		() => getPaginationPages(page, numberOfPages),
		[numberOfPages, page]
	);

	const handlePage = (data) => {
		if (data === "prev") {
			if (page > 0) setPage(page - 1);
		} else if (data === "next") {
			if (page < numberOfPages - 1) setPage(page + 1);
		} else {
			if (Number.isInteger(data)) {
				setPage(data - 1);
			}
		}
	};

	return (
		<div className="mx-auto px-8 py-16">
			<div className="grid grid-cols-1 gap-6 xl:gap-8 md:grid-cols-3 lg:grid-cols-4">
				{filteredCourses.map((course) => (
					<div
						className="flex flex-col gap-2 mb-8"
						key={course.id}
					>
						<Link
							to={`/courses/${course.id}`}
							className="block relative w-full pb-[56.25%] rounded-tl-md rounded-tr-md overflow-hidden"
						>
							<img
								loading="lazy"
								className="absolute top-0 left-0 w-full h-full object-cover"
								src={
									course?.image ||
									"https://kinsta.com/wp-content/uploads/2023/04/react-must-be-in-scope-when-using-jsx.jpg"
								}
								alt={course.courseName}
							/>
						</Link>
						<div className="mt-3">
							<span className="py-[6px] px-4 capitalize bg-white/10 text-xs rounded-[50px] font-semibold">
								{course?.category}
							</span>
						</div>

						<Link
							to={`/courses/${course.id}`}
							className="block mt-3"
						>
							<h3 className="text-[18px] font-bold">
								{course.courseName}
							</h3>
						</Link>
						<Link to={`/courses/${course.id}`} className="block">
							<p>{course.description}</p>
						</Link>
						<div className="flex text-gray-300 items-center gap-4 text-xs mt-3 tracking-wide">
							<Link
								to={`/instructors/${course.instructor.id}`}
								className="block w-12 aspect-square overflow-hidden rounded-full"
							>
								<img
									className="w-full h-full object-cover"
									src={course?.instructor?.image}
									alt={course?.instructor?.name}
								/>
							</Link>

							<div>
								<Link
									to={`/instructors/${course.instructor.id}`}
								>
									<h3 className="font-bold text-lg">
										{course?.instructor.name}
									</h3>
								</Link>
								<div className="flex  gap-2">
									<p>Sep 12, 2024</p>
									<span>&#x2022;</span>
									<p>{course?.duration}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex justify-center gap-3">
				<div
					className="flex justify-center items-center p-4 rounded-full aspect-square border border-white/50 cursor-pointer text-gray-300 hover:border-white hover:text-white transition"
					onClick={() => handlePage("prev")}
				>
					<MdOutlineKeyboardArrowLeft className="w-6 h-6" />
				</div>
				{maxPages.map((pageNo, index) => (
					<div
						key={index}
						className={`flex justify-center items-center p-4 rounded-full aspect-square border cursor-pointer transition ${
							page + 1 === pageNo
								? "text-[#fcaa18] border-[#fcaa18]"
								: "text-gray-300 border-white/50 hover:border-white hover:text-white"
						}`}
						onClick={() => handlePage(pageNo)}
					>
						<div className="w-6 h-6 flex justify-center items-center font-semibold">
							<span>{pageNo}</span>
						</div>
					</div>
				))}
				<div
					className="flex justify-center items-center p-4 rounded-full aspect-square border border-white/50 cursor-pointer text-gray-300 hover:border-white hover:text-white transition"
					onClick={() => handlePage("next")}
				>
					<MdOutlineKeyboardArrowRight className="w-6 h-6" />
				</div>
			</div>
		</div>
	);
}

import { Link } from "react-router-dom";
import Loading from "./galleryLoading";
import { useGetCoursesByInstructorIdQuery } from "../../state/firebaseApi";

const InstructorGallery = ({
	instructor,
	instructorId
}) => {

	const {
		data: courses,
		isLoading,
		isError,
		error
	} = useGetCoursesByInstructorIdQuery(instructorId);

	let content;

	if (isLoading) {
		content = <Loading />
	}else if(isError){
		content = <div>{error?.message}</div>
	}else{
		content = (
			<div className="mt-4 grid grid-cols-1 gap-6 xl:gap-8 md:grid-cols-2">
				{courses.map((course) => (
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
								to={`/instructors/${instructor.id}`}
								className="block w-12 aspect-square overflow-hidden rounded-full"
							>
								<img
									className="w-full h-full object-cover"
									src={instructor?.image}
									alt={instructor?.name}
								/>
							</Link>

							<div>
								<Link to={`/instructors/${instructor.id}`}>
									<h3 className="font-bold text-lg">
										{instructor.name}
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
		);
	}

	return (
		<div className="mt-10">
			<h2 className="font-bold text-2xl">Related Courses</h2>
			{content}
		</div>
	);
};

export default InstructorGallery;

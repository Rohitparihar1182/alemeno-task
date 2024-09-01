import Loading from "./loading";

import { useGetCourseQuery } from "../../state/firebaseApi";
import { Link, useParams } from "react-router-dom";

export default function CoursePage() {
	const { courseId } = useParams();

	const {
		data: course,
		isSuccess,
		isError,
		error,
	} = useGetCourseQuery(courseId);

	let content;

	if (isSuccess) {
		content = (
			<div className=" max-w-5xl mx-auto p-4">
				<img
					src={course.image}
					alt={course.courseName}
					className="w-full object-cover aspect-video rounded-md"
				/>
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">
					{course.courseName}
				</h1>
				<div className="text-sm my-4 text-gray-300">
					<span>{course.description}</span> Lorem ipsum, dolor sit
					amet consectetur adipisicing elit. Consequatur sint pariatur
					modi dolores maxime, non sit ipsa? Optio, porro maiores
					similique suscipit aperiam animi veritatis consequatur
					repellendus dolores eveniet molestiae, exercitationem a
					nesciunt. Expedita consequatur aspernatur harum, magni
					reiciendis quis laudantium odit necessitatibus aliquam
					provident eveniet tenetur animi porro illo nostrum autem,
					nemo labore voluptates adipisci! Ipsa aspernatur quis nobis
					error pariatur a quasi, odio doloribus veniam temporibus
					vero facilis rem. Repellendus labore veniam beatae nemo
					repudiandae suscipit voluptatem assumenda.
				</div>
				{course.instructor && (
					<div className="flex text-gray-300 items-center gap-4 text-xs mt-3 tracking-wide">
						<Link
							to={`/instructor/${course.instructor.id}`}
							className="block w-12 aspect-square overflow-hidden rounded-full"
						>
							<img
								className="w-full h-full object-cover"
								src={course?.instructor?.image}
								alt={course?.instructor?.name}
							/>
						</Link>

						<div>
							<Link to={`/instructor/${course?.instructor?.id}`}>
								<h3 className="font-bold text-lg">
									{course?.instructor.name}
								</h3>
							</Link>
							<div className="flex  gap-2">
								<p>{course.schedule}</p>
							</div>
						</div>
					</div>
				)}
				{course.syllabus && <div className="mt-8 p-6 bg-neutral-800 shadow-md rounded-lg">
					<h2 className="text-2xl font-bold mb-4">Course Syllabus</h2>
					<div className="space-y-4">
						{course.syllabus.map((item, index) => (
							<div
								key={index}
								className="p-4 flex flex-wrap items-center gap-2 bg-neutral-700 rounded-md shadow-sm"
							>
								<div className="text-lg font-semibold">
									Week {item.week}:
								</div>
								<div className="text-gray-200">
									{item.topic}
								</div>
							</div>
						))}
					</div>
				</div>}
				
			</div>
		);
	} else if (isError) {
		content = <div className="p-6">{error.message}</div>;
	} else {
		content = <Loading />;
	}
	return <div className="my-16">{content}</div>;
}

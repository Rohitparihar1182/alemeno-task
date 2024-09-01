import Loading from "./loading";

import { useGetCourseQuery } from "../../state/firebaseApi";
import { useParams } from "react-router-dom";

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
					<span>{course.description}</span> |{" "}
				</div>
			</div>
		);
	}else if(isError){
		content = (
			<div className="p-6">{error.message}</div>
		)
	}else {
		content = (
			<Loading />
		)
	}
	return <div className="my-16">{content}</div>;
}

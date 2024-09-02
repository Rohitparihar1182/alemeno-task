import Loading from "./loading";

import { useParams } from "react-router-dom";
import InstructorGallery from "../../components/instructor/instructorGallery";
import MainSection from "../../components/instructor/mainSection";
import {
	useGetInstructorQuery
} from "../../state/firebaseApi";

export default function InstructorPage() {
	const { instructorId } = useParams();

	const {
		data: instructor,
		isSuccess,
		isError,
		error,
	} = useGetInstructorQuery(instructorId);

	let content;

	if (isSuccess) {
		content = (
			<div className="max-w-5xl mt-20 mx-auto p-4">
				<MainSection instructor={instructor} />
				<InstructorGallery
					instructor={instructor}
					instructorId={instructorId}
				/>
			</div>
		);
	} else if (isError) {
		content = <div className="p-6">{error.message}</div>;
	} else {
		content = <Loading />;
	}
	return <div className="my-16">{content}</div>;
}

import { useGetCoursesQuery } from "../../state/firebaseApi";
import Gallery from "./components/gallery";
import Loading from "./components/loading";

export default function CourseGallery() {
	const {
		data: courses,
		isLoading,
		isError
	} = useGetCoursesQuery();

	if (isLoading) return <Loading />;
	if (isError) return <div>Error loading data</div>;

	return <div>
		<Gallery courses={courses} />
	</div>;
}



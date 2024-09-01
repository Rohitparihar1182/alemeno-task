import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import ScrollTop from "./components/scrollTop";
import Footer from "./components/footer";
import HomePage from './pages/home'
import CoursePage from "./pages/course";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Layout>
				<HomePage />
			</Layout>
		),
	},
	{
		path: "/courses/:courseId",
		element: (
			<Layout>
				<CoursePage />
			</Layout>
		),
	},

]);

export default function App() {
	
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

function Layout({ children }) {
	return (
		<>
			<Navbar />
			<ScrollTop />
			{children}
			<Footer />
		</>
	);
}

import { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";

const navLinks = [
	"home",
	"courses",
	"instructors",
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleHam = () => {
		setIsOpen(prev => !prev)
	}

	const activeLink = "home";
	return (
		<div className={`fixed top-0 left-0 h-16 w-full z-20 border-b border-gray-100/20 bg-black/50 backdrop-blur-md`}>
			<div className="px-4 lg:px-8 flex gap-5 h-full">
				<a href="/" className="flex items-center">
                    <div>
					    <img src={Logo} alt="logo" className="max-w-full h-12" />
                    </div>
					<p className="text-3xl font-bold text-amber-500">CN</p>
				</a>
				<div className="ml-5">
                    <form className="flex items-center h-full">
                        <input name="search" id="search" type="text" className="border-b w-80 border-gray-100/50 bg-transparent outline-none focus:bg-white/10 p-2 text-sm rounded" placeholder="Search here..." />
                        <button className="-ml-8 bg-amber-500 p-2 rounded-full">
                            <IoSearch />
                        </button>
                    </form>
                </div>
				<div className={`absolute flex top-full h-screen gap-8 text-xl uppercase bg-black/50 backdrop-blur-md left-0 right-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0 xl:text-base xl:p-0 transition-all duration-300 bottom-0 flex-col xl:static xl:flex-row p-10 xl:h-auto xl:bg-transparent xl:backdrop-blur-none xl:ml-auto xl:gap-4 xl:items-center overflow-hidden`}>
					{navLinks.map((link, index) => (
						<div key={index} className={`uppercase xl:capitalize font-bold xl:font-normal cursor-pointer ${activeLink === link ? "text-[#fcaa18]": "text-gray-200  hover:text-gray-100"}`}>
							{link}
						</div>
					))}
				</div>
				<div className="xl:hidden ml-auto mr-4 flex items-center">
                    <button
                        className="button-three"
                        onClick={handleHam}
                        aria-expanded={isOpen}
                    >
                        <svg stroke="#fff" fill="none" className="hamburger" viewBox="-10 -10 120 120" width="40">
                            <path className="line" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                            </path>
                        </svg>
                    </button>
                </div>
			</div>
		</div>
	);
}

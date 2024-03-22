import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
    return (
        <>
            <nav className="bg-white backdrop-blur-md shadow-lg fixed top-0 left-0 right-0">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <AnchorLink href="#top" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-3xl">
                                    Noel's Portfolio
                                </span>
                            </AnchorLink>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <AnchorLink className="font-bold text-xl hover:bg-harder-crema p-1 rounded-sm" href="#skills">Skills</AnchorLink>
                            <span>|</span>
                            <AnchorLink className="font-bold text-xl hover:bg-harder-crema p-1 rounded-sm" href="#projects">Projects</AnchorLink>
                            <span>|</span>
                            <AnchorLink className="font-bold text-xl hover:bg-harder-crema p-1 rounded-sm" href="#aboutMe">About Me</AnchorLink>
                            <span>|</span>
                            <AnchorLink className="font-bold text-xl hover:bg-harder-crema p-1 rounded-sm" href="#experience">Experience</AnchorLink>
                            <span>|</span>
                            <AnchorLink className="font-bold text-xl hover:bg-harder-crema p-1 rounded-sm" href="#contact">Contact</AnchorLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
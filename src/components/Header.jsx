import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
    return (
        <>
            <div className="flex flex-col items-center mt-36 mb-36 justify-items-center">
                <h1 className="font-bold text-3xl pb-10 text-center">Explore my work, skills and experience</h1>
                <div className="md:w-1/4 w-2/4 flex flex-row justify-around">
                    <AnchorLink href="#projects" className="bg-hard-green hover:bg-light-green text-crema p-3 rounded-2xl">Projects</AnchorLink>
                    <AnchorLink href="#contact" className="bg-light-green hover:bg-hard-green text-crema p-3 rounded-2xl">Contact</AnchorLink>
                </div>
            </div>
        </>
    )
}

export default Header;
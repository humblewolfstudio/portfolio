import Feature from "./Feature";

function Features() {
    return (
        <>
            <div id="skills" className="w-full bg-light-green rounded">
                <div className="flex flex-col items-center pt-20 md:pb-32 pb-10">
                    <h1 className="text-crema font-bold text-5xl mb-10">Skills</h1>
                    <label className="text-crema font-bold text-2xl text-center">Some of my skillset that I've been developing the last years:</label>
                </div>
                <div className="grid md:grid-cols-2 grid-rows-2 gap-8 p-10">
                    <Feature title="Full Stack Development" description="Good understanding of both Frontend and Backend technologies." />
                    <Feature title="Adaptability" description="Capacity of being able to adapt to a new Framework/Technology in a small amount of time." />
                    <Feature title="Teamwork" description="I'm good at being independent and self-sustainable, but I'm also capable of working within a group." />
                    <Feature title="Problem Solving" description="I have good problem solving skills, If I dont get something to work, I find an easy workaround." />
                </div>
            </div>
        </>
    )
}

export default Features;
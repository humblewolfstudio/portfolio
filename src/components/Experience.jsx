const Experience = () => {
    return (
        <>
            <div id="experience" className="w-full rounded flex flex-col items-center pt-20 pb-32">
                <h1 className="font-bold text-5xl pb-20">Experience</h1>
                <div className="p-10 text-xl">
                    <p className="pb-5">I've experience in a lot of technologies, frameworks and languages.</p>
                    <p className="text-2xl font-semibold">Frontend: </p>
                    <ul className="border-b-gray-300 border-b pb-2 mb-3">
                        <li>- <b>Libraries</b>: React, ejs</li>
                        <li>- <b>Frameworks</b>: Vue, Laravel, NextJS, Express</li>
                        <li>- <b>Platforms</b>: Android, MacOS, iOS, Web</li>
                    </ul>
                    <p className="text-2xl font-semibold">Backend: </p>
                    <ul className="border-b-gray-300 border-b pb-2 mb-3">
                        <li>- <b>Databases</b>: SQLite, MongoDB, PostgreSQL</li>
                        <li>- <b>Technologies</b>: Nginx, Traefik, Docker, Docker Compose, Github CI/CD</li>
                    </ul>
                    <p className="text-2xl font-semibold">Languages: </p>
                    <ul className="">
                        <li>- <b>Frontend</b>: HTML, JavaScript, CSS</li>
                        <li>- <b>Backend</b>: Java, TypeScript, Python, React Native, C#, Swift, Rust, Bash</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience;
import Project from "./Project";

function Projects() {
    return (
        <>
            <div id="projects" className="w-full ">
                <div className="flex flex-col items-center pt-20 md:pb-32 pb-10">
                    <h1 className="font-bold text-5xl mb-10">Projects</h1>
                    <label className="font-bold text-2xl text-center">Here are some of the projects I've able to work this years:</label>
                </div>
                <div className="grid md:grid-cols-2 grid-rows-2 gap-8 p-10">
                    <Project title="IMG Server"
                        description="IMG Server is a SaaS where you can upload an image and retrieve it after via link in your app/website."
                        link="https://img.capicua.org.es/"
                    />
                    <Project title="Notifyer"
                        description="Project that let's you receive in your Mac any android push notification"
                        link="https://github.com/orgs/Notifyer/repositories" />
                    <Project title="DocLite"
                        description="Single-file NoSQL Document based database. Similar to SQLite but for documents."
                        link="https://github.com/humblewolfstudio/doc-lite" />
                    <Project title="Volume Changer"
                        description="TCP server to change your volume and play/pause your media."
                        link="https://github.com/humblewolfstudio/volume_changer" />
                </div>
            </div>
        </>
    )
}

export default Projects;
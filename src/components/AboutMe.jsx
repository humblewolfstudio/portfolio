function AboutMe() {
    const calcularEdad = () => {
        const date = new Date(2001, 3, 22);
        const ageDifMillis = Date.now() - date;
        const ageDate = new Date(ageDifMillis);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (
        <>
            <div id="aboutMe" className="w-full text-crema bg-marron rounded flex flex-col items-center pt-20 pb-32">
                <h1 className="font-bold text-5xl pb-20">About Me: </h1>
                <div className="p-10 text-xl">
                    <p className="pb-5">I'm Noel Cabús Casacuberta, a {calcularEdad()} years old <b>Full Stack Developer</b>.</p>
                    <p className="pb-5">I'm mostly <b>self teached</b>, I've been spending the majority of 2021 to 2023
                        learning to professionally code. I had already coded before 2021, but It was
                        mostly small things in Unity or Java, never anything really remarkable.
                    </p>
                    <p className="pb-5">It wasn't much, but it helped to gentle the learning curve.</p>
                    <p className="">By now I consider myself a pretty good Developer.</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe;
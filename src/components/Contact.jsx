const Contact = () => {
    return (
        <>
            <div id="contact" className=" bg-light-green flex flex-col items-center pt-20 pb-32 text-crema rounded">
                <h1 className="font-bold text-5xl mb-10">Contact</h1>
                <div className="flex flex-row items-center justify-around w-full">
                    <a href='mailto:noelcabus01@gmail.com'><img src="/images/mail_logo.png" height={100} width={100} alt="Mail Logo" /></a>
                    <a href="https://github.com/humblewolfstudio" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github_logo.png" height={100} width={100} alt="Github Logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/noel-cab%C3%BAs-casacuberta-03949a226/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin_logo.png" height={100} width={100} alt="Linkedin Logo" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;
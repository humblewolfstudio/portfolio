const Project = (props) => {
    return (
        <>
            <div className="w-full h-full p-5 bg-hard-green rounded flex flex-col">
                <h1 className="font-bold text-md md:text-3xl pb-5 text-harder-crema break-words">{props.title}</h1>
                <label className="text-harder-crema md:text-xl break-words flex-1 pb-5">{props.description}</label>
                {props.link ?
                    <label className="text-harder-crema text-2xl">Link: <a href={props.link} className="text-harder-crema text-lg" target="_blank" rel="noopener noreferrer">{props.title}</a></label>
                    :
                    <></>}
            </div>
        </>
    )
}

export default Project;
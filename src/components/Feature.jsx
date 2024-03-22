function Feature(props) {
    return (
        <>
            <div className="w-full h-full p-5 bg-harder-crema rounded">
                <h1 className="font-bold text-md md:text-3xl pb-5 text-text break-words">{props.title}</h1>
                <label className="text-text md:text-xl break-words">{props.description}</label>
            </div>
        </>
    )
}

export default Feature;
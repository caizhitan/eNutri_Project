const TitleBar = props => {
    return(
        <>
            <div className="flex w-full bg-orange-400 text-white font-semibold text-4xl justify-center pt-2 pb-2">
                {props.title}
            </div>
        </>
    )
}

export default TitleBar;
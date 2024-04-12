const NavButton = props => {
    return(
        <>
            <button className={
                `flex h-1/5 font-semibold text-2xl w-44 justify-center items-center align-middle
                ${props.select ? (" text-orange-400 "):(" text-white ")}
                `}
                onClick={props.onClick} 
            >
                    {props.name}
            </button>
        </>
    )
}

export default NavButton;
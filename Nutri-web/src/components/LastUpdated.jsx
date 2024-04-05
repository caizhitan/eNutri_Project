const LastUpdated = props => {
    const today = new Date();
    const date = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
    const time = today.getHours()+":"+today.getMinutes();
    const ampm = (today.getHours() >= 12) ? "PM" : "AM";
    return(
        <>
            <div className="flex w-full justify-center items-center">
                <hr className="bg-white w-1/5 h-1.5 rounded-xl mr-8"/>
                Last updated on {date}, {time}{ampm}
                <hr className="bg-white w-1/5 h-1.5 rounded-xl ml-8"/>
            </div>
        </>
    )
}

export default LastUpdated;
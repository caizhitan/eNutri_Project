const SearchBar = props => {
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes();
    const date = today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear();
    const ampm = (today.getHours() >= 12) ? "PM" : "AM";
    return(
        <>
            <div className="flex w-full bg-white">
                    <div className="flex w-1/2 pl-3 pr-3 pt-0.5 pb-0.5">
                        <input
                            className="bg-gray-200 rounded-3xl pl-3 w-full placeholder-orange-400 placeholder-"
                            type="search"
                            placeholder="Search"
                        />
                    </div>
                    <div className="flex w-1/2 justify-end text-lg font-medium">
                        <div className="pr-10">
                            {date}
                        </div>
                        <div className="pr-10">
                            {time}{ampm}
                        </div>
                    </div>
            </div>
        </>
    )
}

export default SearchBar;
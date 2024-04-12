import humanIconPNG from "../assets/humanIconPNG.png";

const PatientInfo = props => {
    return(
        <>
            <div className="flex w-full h-1/3 pt-3 pl-5 pr-5">
                <div className="flex h-full w-1/6 justify-center items-center">
                    <img src={humanIconPNG} alt='user icon' className="flex m-auto shadow-xl rounded-full"/>
                </div>
                    <div className="flex flex-grow bg-white shadow-xl rounded-2xl pl-3 pr-3 pt-2 pb-2 ml-5 w-auto">
                        <div className="flex-col flex items-start w-1/2 h-full font-medium text-lg">
                            <div className="h-1/4 w-full flex items-center align-middle">Name:</div>
                            <div className="h-1/4 w-full flex items-center align-middle">Sex:</div>
                            <div className="h-1/4 w-full flex items-center align-middle">Age:</div>
                            <div className="h-1/4 w-full flex items-center align-middle">Blood Type:</div>
                        </div>
                        <div className="flex-col flex items-end w-1/2 h-full font-medium text-lg">
                            <div className="h-1/4 w-full flex items-center">Muhd Syahir</div>
                            <div className="h-1/4 w-full flex items-center">M</div>
                            <div className="h-1/4 w-full flex items-center">23</div>
                            <div className="h-1/4 w-full flex items-center">O+</div>
                        </div>
                    </div>
                    <div className="flex flex-grow bg-white shadow-xl rounded-2xl pl-3 pr-3 pt-2 pb-2 ml-5 w-auto">
                        <div className="flex-col flex items-start w-1/2 h-full font-medium text-lg">
                            <div className="h-1/3 w-full flex items-center align-middle">Address:</div>
                            <div className="h-1/3 w-full flex items-center align-middle">Referral Doctor:</div>
                            <div className="h-1/3 w-full flex items-center align-middle">Hospital:</div>
                        </div>
                        <div className="flex-col flex items-end w-1/2 h-full font-medium text-lg">
                            <div className="h-1/3 w-full flex items-center">Pasir Ris St 21 Blk 235 #06-54</div>
                            <div className="h-1/3 w-full flex items-center ">Dr Employee MuzWasHands</div>
                            <div className="h-1/3 w-full flex items-center ">Changi General Hospital</div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default PatientInfo;
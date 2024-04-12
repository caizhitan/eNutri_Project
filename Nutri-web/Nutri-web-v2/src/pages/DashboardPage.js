import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import SearchBar from "../components/SearchBar";
import PatientInfo from "../components/PatientInfo";
import LastUpdated from "../components/LastUpdated";
import DailyPillChart from "../components/DailyPillChart";
import DailyWaterChart from "../components/DailyWaterChart";

const DashboardPage = () => {
    const queryParams = new URLSearchParams(useLocation().search);
    const patientID = queryParams.get('patientID');
    console.log("this is patient id" + patientID);

    return(
        <div className="flex w-full h-full">
            <NavBar dashBoard={true} id={patientID} />
            <div className="flex flex-col h-screen w-full bg-blue-100">
                <TitleBar title={"Dashboard"} />
                <SearchBar />
                <div className="flex flex-col w-full h-full">
                <PatientInfo />
                <LastUpdated />
                <div className="flex w-full h-2/3 pl-5 pr-5 pb-3">
                    <div className="flex w-full h-full bg-white rounded-3xl shadow-xl">
                        <div className="flex flex-col w-1/2 h-full items-center font-semibold text-xl">
                            <div className="flex h-1/6 justify-center items-center">
                                Daily Pill Dispensed
                            </div>
                            <div className="flex w-full h-full justify-center align-middle items-center pl-5 pr-2.5">   
                                <DailyPillChart />
                            </div>
                        </div>
                        <div className="flex flex-col w-1/2 h-full items-center font-semibold text-xl">
                            <div className="flex h-1/6 justify-center items-center">
                                Daily water consumption
                            </div>
                            <div className="flex w-full h-full justify-center align-middle items-center pl-2.5 pr-5">
                                <DailyWaterChart />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;
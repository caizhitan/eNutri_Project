import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import SearchBar from "../components/SearchBar";
import PatientInfo from "../components/PatientInfo";
import LastUpdated from "../components/LastUpdated";

const HistoryListPage = () => {
    const queryParams = new URLSearchParams(useLocation().search);
    const patientID = queryParams.get('patientID');
    console.log("this is patient id" + patientID);
    return(
        <div className="flex w-full h-full">
            <NavBar historyList={true} id={patientID} />
            <div className="flex flex-col h-screen w-full bg-blue-100">
                <TitleBar title={"History List"} />
                <SearchBar />
                <div className="flex flex-col w-full h-full">
                <PatientInfo />
                <LastUpdated />
                <div className="flex w-full h-2/3 pl-5 pr-5 pb-3">
                    <div className="flex w-full h-full bg-white rounded-3xl shadow-xl">
                        history 
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HistoryListPage;
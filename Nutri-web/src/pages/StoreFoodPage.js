import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import TitleBar from "../components/TitleBar";
import SearchBar from "../components/SearchBar";
import PatientInfo from "../components/PatientInfo";
import LastUpdated from "../components/LastUpdated";
import { useEffect, useState } from "react";
import axios from "axios"

const StoreFoodPage = () => {
    const queryParams = new URLSearchParams(useLocation().search);
    const patientID = queryParams.get('patientID');
    console.log("this is patient id" + patientID);

    const [foodHistory, setFoodHistory] = useState([]);


    return(
        <div className="flex w-full h-full overflow-hidden">
            <NavBar storeFood={true} id={patientID} />
            <div className="flex flex-col h-screen w-full bg-blue-100">
                <TitleBar title={"Store Food"}/>
                <SearchBar />
                <div className="flex flex-col w-full h-full">
                <PatientInfo />
                <LastUpdated />
                <div className="flex w-full h-2/3 pl-5 pr-5 pb-3">
                    <div className="flex w-full h-full bg-white rounded-3xl shadow-xl">
                        <div className="flex w-1/2 h-full">
                            <table cellSpacing="10" className="">
                                <thead>
                                    <tr>
                                        <th className="">#</th>
                                        <th className="">Food Name</th>
                                        <th className="">Food Amount</th>
                                        <th className="">Food Time</th>
                                        <th className="">Calories</th>
                                        <th className="">Sodium</th>
                                        <th className="">Potassium</th>
                                        <th className="">Sugar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {foodHistory.map((food, key) => 
                                        <tr key={key}>
                                            <td>{food.fHistory_id}</td>
                                            <td>{food.foodName}</td>
                                            <td>{food.foodAmount}</td>
                                            <td>{food.foodTime}</td>
                                            <td>{food.calories}</td>
                                            <td>{food.sodium}</td>
                                            <td>{food.potassium}</td>
                                            <td>{food.sugar}</td>
                                        </tr>
                                        )}
                                </tbody>
                            </table>
                        </div> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default StoreFoodPage;
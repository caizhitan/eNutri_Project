import axios from "axios"
import { useEffect, useState, useContext } from "react";
import './table.css';
import TitleMenu from "../Components/Title";
import { usePatientContext } from "./patientID";

const ListFoodHist = () => {

    const { patientid } = usePatientContext();

    const [foodHistory, setFoodHistory] = useState([]);
    useEffect(() => {
        getFoodHistory();
    }, []);

    function getFoodHistory() {
        axios.get('http://172.20.10.2/api/foodHistory/users/', patientid).then(function(response){
        console.log(response.data);
        console.log(patientid.map((id) => (id)));
        setFoodHistory(response.data);
        });
    }
    
    return (
        <>
        <div>
            <TitleMenu />
            <div class='tag'>
                <h3 className="sideSubHeader">List food History</h3>
            </div>
            <table cellSpacing="10" className="table-center">
                <thead>
                    <tr>
                        <th className="inTableText">#</th>
                        <th className="inTableText">Food Name</th>
                        <th className="inTableText">Food Amount</th>
                        <th className="inTableText">Food Time</th>
                        <th className="inTableText">Calories</th>
                        <th className="inTableText">Sodium</th>
                        <th className="inTableText">Potassium</th>
                        <th className="inTableText">Sugar</th>
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
        </>
    )
}

export default ListFoodHist;
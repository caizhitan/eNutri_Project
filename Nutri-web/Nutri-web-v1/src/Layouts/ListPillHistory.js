import axios from "axios"
import { useEffect, useState } from "react";
import './table.css';
import TitleMenu from "../Components/Title";

export default function ListPillHist() {
    const [pillHistory, setPillHistory] = useState([]);
    useEffect(() => {
        getPillHistory();
    }, []);

    function getPillHistory() {
        axios.get('http://172.20.10.2/api/pillHistory/users/').then(function(response){
        console.log(response.data);
        setPillHistory(response.data);
        });
    }

    return (
        <div>
            <TitleMenu />
            <div class='tag'>
                <h3 className="sideSubHeader">List Pill History</h3>
            </div>
            <table cellSpacing="10" class='table-center'>
                <thead>
                    <tr>
                        <th className="inTableText">#</th>
                        <th className="inTableText">Pill Name</th>
                        <th className="inTableText">Pill Amount</th>
                        <th className="inTableText">Pill Time </th>
                    </tr>
                </thead>
                <tbody>
                    {pillHistory.map((pill, key) => 
                        <tr key={key}>
                            <td>{pill.pHistory_id}</td>
                            <td>{pill.pillName}</td>
                            <td>{pill.pillAmount}</td>
                            <td>{pill.pillTime}</td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}
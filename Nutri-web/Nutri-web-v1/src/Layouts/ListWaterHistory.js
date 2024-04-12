import axios from "axios"
import { useEffect, useState } from "react";
import './table.css';
import TitleMenu from "../Components/Title";

export default function ListWaterHist() {

    const [waterHistory, setWaterHistory] = useState([]);
    useEffect(() => {
        getWaterHistory();
    }, []);

    function getWaterHistory() {
        axios.get('http://172.20.10.2/api/waterHistory/users/').then(function(response){
        console.log(response.data);
        setWaterHistory(response.data);
        });
    }

    return (
        <div>
            <TitleMenu />
            <div className="tag">
                <h3 className='sideSubHeader'>List Water History</h3>
            </div>
            <table cellSpacing="10" className='table-center'>
                <thead>
                    <tr>
                        <th className="inTableText">#</th>
                        <th className="inTableText">Water Amount</th>
                        <th className="inTableText">Water Time </th>
                    </tr>
                </thead>
                    <tbody>
                        {waterHistory.map((water, key) => <tr key={key}>
                            <td>{water.wHistory_id}</td>
                            <td>{water.waterAmount}</td>
                            <td>{water.waterTime}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
    )
}
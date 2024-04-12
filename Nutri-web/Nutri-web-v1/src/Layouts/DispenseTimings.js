import axios from "axios"
import { useEffect, useState } from "react";
import TitleMenu from '../Components/Title';
import './table.css'

export default function DispenseTimings() {

    const [waterTime, setWaterTime] = useState([]);
    useEffect(() => {
        getWaterTime();
    }, []);

    function getWaterTime() {
        axios.get('http://localhost:8080/api/waterTime/users/').then(function(response){
        console.log(response.data);
        setWaterTime(response.data);
        });
    }

    const [pillTime, setPillTime] = useState([]);
    useEffect(() => {
        getPillTime();
    }, []);

    function getPillTime() {
        axios.get('http://172.20.10.2/api/pillTime/users/').then(function(response){
        console.log(response.data);
        setPillTime(response.data);
        });
    }

    return (
        <div>
            <TitleMenu />
        <div className="flexcontainer">
            <div class='tag'>
                <h3 className="sideSubHeader">Dispensing Time</h3>
            </div>
            <div className="floatchild">
                <table cellSpacing="10" className="center-table">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Water Amount</th>
                        <th>Water Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {waterTime.map((water, key) => 
                        <tr key={key}>
                            <td>{water.wTime_id}</td>
                            <td>{water.waterAmount}</td>
                            <td>{water.waterTime}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="floatchild">
            <table cellSpacing="10" className="center-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pill Name</th>
                        <th>Pill Amount</th>
                        <th>Pill Time</th>
                    </tr>
                </thead>
                <tbody>
                    {pillTime.map((pill, key) => 
                        <tr key={key}>
                            <td>{pill.pTime_id}</td>
                            <td>{pill.pillName}</td>
                            <td>{pill.pillAmount}</td>
                            <td>{pill.pillTime}</td>
                        </tr>
                        )}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    )
}
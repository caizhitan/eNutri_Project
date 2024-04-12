import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import TitleMenu from '../Components/Title';
import './table.css';

export default function CreatePillTime() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/api/waterTime/users/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/DispenseTimings');
        });
        console.log(inputs);
    }

    const [waterTime, setWaterTime] = useState([]);
    useEffect(() => {
        getWaterTime();
    }, []);

    function getWaterTime() {
        axios.get('http://172.20.10.2/api/waterTime/users/').then(function(response){
        console.log(response.data);
        setWaterTime(response.data);
        });
    }

    return (
        <div>
            <TitleMenu />
            <div class='tag'>
                <h3 className="sideSubHeader">Create Water Time</h3>
            </div>
            <div className="createTableleft">
                <form onSubmit={handleSubmit}>
                    <table cellSpacing="10" className="createTableBorder">
                        <tbody>
                            <tr>
                                <th align="left">
                                    <label className="inTableText">Water Amount: </label>
                                </th>
                                <td>
                                    <input type="text" name="waterAmount" onChange={handleChange} className="inputSize" />
                                </td>
                            </tr>
                            <tr>
                                <th align="left">
                                    <label className="inTableText">Water Time: </label>
                                </th>
                                <td>
                                    <input type="time" name="waterTime" onChange={handleChange} className="inputSize"/>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colSpan="2" className="tableSaveButton">
                                    <button className="saveButton">Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div className="floatchild">
                    <table cellSpacing="10" className="center-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Water Amount</th>
                                <th>Water Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {waterTime.map((water, key) => 
                            <tr key={key}>
                                <td>{water.wTime_id}</td>
                                <td>{water.waterAmount}</td>
                                <td>{water.waterTime}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
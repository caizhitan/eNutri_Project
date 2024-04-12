import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import TitleMenu from "../Components/Title";
import './table.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function CreatePillTime() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [pillTime, setPillTime] = useState([]);
    const [dropdown, setDropdown] = useState({value: 'one', label: 'one'});
    const [options, setOptions ] = useState([
        'one', 'two', 'three'
      ]);
    
    const defaultOption = options[0];
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var newInputs = {'pillName': dropdown.value};
        console.log(newInputs);
        var obj = {...newInputs, ...inputs};
        axios.post('http://172.20.10.2/api/pillTime/users/save', newInputs).then(function(response){
            console.log(response.data);
            navigate('/DispenseTimings');
        });
        console.log(newInputs);
        console.log(inputs);
    }

    useEffect(() => {
        getPillTime();
        getPillType();
    }, []);

    function getPillTime() {
        axios.get('http://172.20.10.2/api/pillTime/users/').then(function(response){
        console.log(response.data);
        setPillTime(response.data);
        });
    }

    function getPillType(){
        axios.get('http://localhost:8080/api/pillType/users/').then(function(response){
            console.log(response.data);
            
            let userFullnames = response.data.map(function(element){
                return `${element.pillName} `;
            })
            setOptions(userFullnames);
            console.log(userFullnames)
        });
    }

    const tableStyle = {
        display: "flex",
        flexdirection: "row",
        padding: "10px",
    }

    return (
        <div>
            <TitleMenu />
            <div className='tag'>
                <h3 className="sideSubHeader">Create Pill Time</h3>
            </div>
            <div className="createTableleft">
                <form onSubmit={handleSubmit}>
                    <table cellSpacing="10" className="createTableBorder" style={tableStyle}>
                        <tbody>
                            <tr>
                                <th align="left">
                                    <label className="inTableText">Pill Type: </label>
                                </th>
                                <td>
                                    <Dropdown 
                                        options={options} 
                                        name="pillName" 
                                        onChange={setDropdown} 
                                        value={defaultOption} 
                                        placeholder="Select an option"
                                        className="inputMenuBackground"
                                        menuClassName='inputMenuItem'
                                        placeholderClassName='inputMenuSize' 
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th align="left">
                                    <label className="inTableText">Pill Amount: </label>
                                </th>
                                <td>
                                    <input type="text" name="pillAmount" onChange={handleChange} className="inputSize"/>
                                </td>
                            </tr>
                            <tr>
                                <th align="left">
                                    <label className="inTableText">Pill Time: </label>
                                </th>
                                <td>
                                    <input type="time" name="pillTime" onChange={handleChange} className="inputSize"/>
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
                                <th>Pill Name</th>
                                <th>Pill Amount</th>
                                <th>Pill Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pillTime.map((pill, key) => 
                                <tr key={key}>
                                    <td>{pill.pTime_id}</td>
                                    <td>{pill.pillName}</td>
                                    <td>{pill.pillAmount}</td>
                                    <td>{pill.pillTime}</td>
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
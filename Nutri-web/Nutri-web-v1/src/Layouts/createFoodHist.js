import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import TitleMenu from '../Components/Title';

export default function CreateFoodHist() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://172.20.10.2/api/foodHistory/users/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/ListFoodHistory');
        });
        console.log(inputs);
    }

    return (
        <div>
            <TitleMenu />
            <div class='tag'>
                <h3 className="sideSubHeader">Create Food</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10" className="table-center">
                    <tbody>
                        <tr>
                            <th align="left">
                                <label className="inTableText">Food Name: </label>
                            </th>
                            <td>
                                <input type="text" name="foodName" onChange={handleChange} className="inputSize"/>
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                <label className="inTableText">Food Amount: </label>
                            </th>
                            <td>
                                <input type="text" name="foodAmount" onChange={handleChange} className="inputSize"/>
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                <label className="inTableText">Calories: </label>
                            </th>
                            <td>
                                <input type="text" name="calories" onChange={handleChange} className="inputSize"/>
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                <label className="inTableText">Sodium: </label>
                            </th>
                            <td>
                                <input type="text" name="sodium" onChange={handleChange} className="inputSize"/>
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                <label className="inTableText">Potassium: </label>
                            </th>
                            <td>
                                <input type="text" name="potassium" onChange={handleChange} className="inputSize"/>
                            </td>
                        </tr>
                        <tr>
                            <th align="left">
                                <label className="inTableText">Sugar: </label>
                            </th>
                            <td>
                                <input type="text" name="sugar" onChange={handleChange} className="inputSize"/>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colSpan="2">
                                <button className="saveButton">Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate ,useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function EditPillHist() {
    const navigate = useNavigate();
    const[inputs, setInputs] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get('http://172.20.10.2/api/dispenser/pill/users').then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8080/api/dispenser/pill/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/Home');
        });
        
    }
    return(
        <div>
                <h1>Edit pill page</h1>
                <form onSubmit={handleSubmit}>
                    <table cellSpacing="10">
                        <tbody>
                            <tr>
                                <th>
                                    <label>pHistory_id: </label>
                                </th>
                                <td>
                                    <input value={inputs.pHistory_id} type="text" name="pHistory_id" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>pillName: </label>
                                </th>
                                <td>
                                    <input value={inputs.pillName} type="text" name="pillName" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>pillAmount:</label>
                                </th>
                                <td>
                                    <input value={inputs.pillAmount} type="text" name="pillAmount" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>pillTime:</label>
                                </th>
                                <td>
                                    <input value={inputs.pillTime} type="time" name="pillTime" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>dispensetype:</label>
                                </th>
                                <td>
                                    <input value={inputs.dispenseType} type="text" name="dispenseType" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <label>ifdispensed:</label>
                                </th>
                                <td>
                                    <input value={inputs.ifdispensed} type="text" name="ifdispensed" onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="right">
                                    <button>Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
        </div>
    );
};

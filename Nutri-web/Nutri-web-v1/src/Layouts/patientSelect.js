import TitleMenu from "../Components/Title";
import axios from "axios"
import { useEffect, useState, useContext } from "react";
import './table.css';
import { Navigate, useNavigate } from "react-router-dom";
import { usePatientContext } from "./patientID";

const PatientSelect = () => {

    const { HandleAddID } = usePatientContext();
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        getPatients();
    }, []);

    function getPatients() {
        axios.get('http://172.20.10.2/api/patient/users/').then(function(response){
        console.log(response.data);
        setPatients(response.data);
        });
    }

    const submitHandler = (id) => {
        
        console.log(id);
        navigate('/Home');
    }

    return(
            <div>
                <TitleMenu />
                <div className="tag">
                    <h3 className='sideSubHeader'>Patient List</h3>
                </div>
                <table cellSpacing="10" className='table-center'>
                    <thead>
                        <tr>
                            <th className="inTableText" class="id">#</th>
                            <th className="inTableText">name</th>
                            <th className="inTableText">lastname</th>
                            <th className="inTableText">email</th>
                            <th className="inTableText">disease</th>
                            <th className="inTableText">action</th>
                        </tr>
                    </thead>
                        <tbody>
                            {patients.map((patient, key) => <tr key={key}>
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.lastname}</td>
                                <td>{patient.email}</td>
                                <td>{patient.disease}</td>
                                <td>
                                    <button onClick={() => submitHandler(patient.id)}>
                                        Select
                                    </button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
            </div>
    )
}

export default PatientSelect;
import { useState, useEffect } from 'react';
import userIcon from '../assets/userIcon.png';
import { useNavigate } from 'react-router-dom';
import { getPatients } from '../services/getPatients';

const PatientSelectPage = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);

    const handlePatientSelect = (id) => {
        //id === patient selected
        console.log(id);
        navigate(`/Dashboard?patientID=${id}`);
    }

    const getPatientList = async() => {
        try{
            const patientList = await getPatients();
            setPatients(patientList);
        }
        catch(error){
            console.log('unable to get patients' + error);
        }
    }

    useEffect(()=>{
       getPatientList();
    }, [])
    
    return(
        <div className="flex bg-blue-100 h-screen w-screen p-20">
            <div className="flex bg-white w-full h-full rounded-3xl">
                <div className='flex-col flex w-full h-full'>
                <div className='flex flex-row pl-5 pt-2 h-10 pb-16'>
                    <img src={userIcon} alt='userIcon' className='w-10 h-10'/>
                    <div className='pl-2 text-3xl font-semibold'>
                        Dr Basim Ibn Ishaq
                    </div>
                </div>
                <div className='flex flex-row font-medium pb-5 pl-5 text-2xl'>Please select a patient:</div>
                <div className='flex pl-5 pr-5'>
                <table className='flex-col flex w-full bg-blue-100 rounded-xl'>
                    <thead className='flex-row flex w-full bg-gray-200 rounded-xl'>
                        <tr className='flex w-full'>
                            <th className='w-1/4'>Patient Name</th>
                            <th className='w-1/4'>Patient Contact</th>
                            <th className='w-1/4'>Disease</th>
                            <th className='w-1/4'>*</th>
                        </tr>
                    </thead>
                    <tbody className='flex-row w-full'>
                        {patients.map((patient, key) => 
                            <tr key={key} className='flex w-full'>
                                <td className='w-1/4 flex justify-center items-center '>{patient.name + " " + patient.lastname}</td>
                                <td className='w-1/4 flex justify-center items-center '>{patient.email}</td>
                                <td className='w-1/4 flex justify-center items-center '>{patient.disease}</td>
                                <td className='w-1/4 flex justify-center items-center '>
                                    <button onClick={() => handlePatientSelect(patient.id)}>
                                        Select
                                    </button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PatientSelectPage;
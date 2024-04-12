import { createContext, useState, useContext, useEffect } from "react";

export const PatientContext = createContext();

const initialID = [
    '0'
  ];
function PatientProvider(props) {
    const [patientid, setPatientid] = useState(initialID);

    function HandleAddID(id) {
      useEffect(() => {
        setPatientid([...patientid, id]);
    }, [patientid])
  }
  
  const ID = {patientid, HandleAddID};
  
  return <PatientContext.Provider value={ID} {...props} />;
}

function usePatientContext() {
    return useContext(PatientContext);
}

export {PatientProvider, usePatientContext };


import axios from "axios"

export const getPatients = async() =>{
        return axios.get(process.env.REACT_APP_API + 'patient/users')
        .then((response) =>{
            const jsonResponse = response;
            console.log(jsonResponse.data);
            return jsonResponse.data;
        })
        .catch((error)=>{
            console.log(error.message);
            return error.message;
        })
        .finally(()=>{
            console.log("no data found");
        })
};
import axios from "axios"

const url = process.env.REACT_APP_APT_ETC + 'pillTodayHistory/users';

export const getPillTodayHistoryPill = async(pill_ID) =>{
    const json = { pill_ID: Number(pill_ID) };
    return axios.get(url,{params:json})
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
    });
};
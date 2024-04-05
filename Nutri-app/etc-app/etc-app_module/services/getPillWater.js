import axios from "axios"

async function getPillWater() {
        axios.get('http://172.20.10.2:80/api/etc/pillWater/pill')
        .then((response) =>{
            const pill = response.data;
            if (Array.isArray(pill)) {
                return pill;
                //console.log(newPill);
            }
        });
        // axios.get('http://172.20.10.2:80/api/etc/pillWater/water')
        // .then((response) =>{
        //     const water = response.data;
        //     if (Array.isArray(water)) {
        //         newWater = water;
        //         //console.log(newWater);
        //     }
        // });
}

export default getPillWater;
import { useState, useEffect } from "react"
import { Bar } from "react-chartjs-2";
import { getPillTodayHistoryPill } from "../services/getPillTodayHistory";

const DailyPillChart = () =>{
    const [pillData, setPillData] = useState([1,2,3,4]);
    const barColour = ["orange", "yellow", "purple", "green"];
    const data = {
        labels: ['Pill 1', 'Pill 2', 'Pill 3', 'Pill 4'],
            datasets: [
                {
                    label: ['Dispensed Pill'],
                    barPercentage: 0.5,
                    barThickness: 35,
                    maxBarThickness:40,
                    minBarLength: 0,
                    backgroundColor: barColour,
                    data: pillData
                }
            ]
    };

    const pillTodayHistory = async() => {
        try{
            let pillArray = [];
            for(var i = 1; i <= 4; i++){
                const pillItem = await getPillTodayHistoryPill(i);
                if(Array.isArray(pillItem)){
                    pillArray.push(pillItem.length);
                }
            }
            setPillData(pillArray);
        }
        catch(error){
            console.log('unable to get patients' + error);
        }
    };

    useEffect(()=>{
        pillTodayHistory();
    }, [])

    return(
        <Bar
            data={data}
            options={{
                plugins: {
                    title: {
                        display: false,
                        text: ""
                    },
                    legend: {
                        display: true,
                    }
                },
            }}
        />
    )
}

export default DailyPillChart;
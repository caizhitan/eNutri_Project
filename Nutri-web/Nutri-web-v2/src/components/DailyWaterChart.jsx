import { Line } from "react-chartjs-2";
import { useState } from "react";

const DailyWaterChart = () => {
    const [timeStamp, setTimeStamp] = useState(["10:00", "11:00", "14:00", "20:00"]);
    const data = {
        labels: timeStamp,
            datasets: [
                {
                    label: ['Dispensed Water'],
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [21430, 15123, 9310, 23124],
                }
            ]
    }
    return(
        <>
        <Line 
            data={data}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "",
                    },
                    legend: {
                        display: false
                    }
                }
            }}
        />
        </>
    )
}

export default DailyWaterChart;
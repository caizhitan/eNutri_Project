import React from 'react';
import {Line as LineChart, Bar as BarChart} from 'react-chartjs-2';
import Chart, { Title } from 'chart.js/auto';
import TitleMenu from '../Components/Title.js';
import PatientProfile from '../Components/PatientProfile.js';

function chartData() {
    return {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Previous Month',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [21430, 15123, 9310, 23124],
        },
        {
          label: 'This month',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [30213, 7310, 15329, 23184],
        },
      ]
    }
  }

  function ChartData2() {
    return {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Daily Water Intake',
                barPercentage: 0.5,
                barThickness: 30,
                maxBarThickness:40,
                minBarLength: 20,
                backgroundColor: "rgba(244,155,0)",
                data: [3102, 1051, 951, 4219, 2314, 617, 494]
            }
        ]
    }
}

    function ChartData3() {
        return {
            labels: ['09:00', '12:00', '15:00', '18:00', '21:00'],
            datasets: [
                {
                    label: 'Dispensed Pill',
                    barPercentage: 0.5,
                    barThickness: 30,
                    maxBarThickness:40,
                    minBarLength: 0,
                    backgroundColor: "rgba(255, 219, 0)",
                    data: [1,1,1,0,0]
                }
            ]
        }
    }

    function ChartData4() {
        return {
            labels: ['09:00', '12:00', '15:00', '18:00', '21:00'],
            datasets: [
                {
                    label: 'Dispensed Water',
                    barPercentage: 0.5,
                    barThickness: 30,
                    maxBarThickness:40,
                    minBarLength: 0,
                    backgroundColor: "rgba(	71, 170, 102)",
                    data: [1,1,1,0,0]
                }
            ]
        }
    }  

  const options = {
    scaleShowGridLines: true,
    scaleGridLineColor: 'rgba(0,0,0,.05)',
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    maintainAspectRatio: false,
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  }

  const styles = {
    graphContainerLine: {
        height: "200px",
        padding: "10px"
      
    },
    graphContainerBar: {
        height: "200px",
        padding:"10px"
    },
    graphContainerBar2: {
        height: "200px",
        padding:"10px"
    },
    graphContainerBar3: {
        height: "200px",
        padding:"10px"
    },
    outsideLineGh: {
        border: '3px solid #f49b00',
        height: '250px',
        width: '500px',
        position: 'absolute',
        top: '75px',
        left: '100px',
        borderRadius: '25px'
    },
    outsideBarGh: {
        border: '3px solid #f49b00',
        height: '250px',
        width: '500px',
        position: 'absolute',
        top: '75px',
        left: '650px',
        borderRadius: '25px'
    },
    outsideBarGh2: {
        border: '3px solid #f49b00',
        height: '250px',
        width: '500px',
        position: 'absolute',
        top: '350px',
        left: '100px',
        borderRadius: '25px'
    },
    outsideBarGh3: {
        border: '3px solid #f49b00',
        height: '250px',
        width: '500px',
        position: 'absolute',
        top: '350px',
        left: '650px',
        borderRadius: '25px'
    },
    LablePadding: {
      paddingTop: '10px'
    }
  }
  

  class Home extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        data: chartData(),
        data2: ChartData2(),
        data3: ChartData3(),
        data4: ChartData4()
      }
    }
  
    render() {
      return (
        <div>
        <TitleMenu />
        <div style={styles.outsideLineGh}>
          <h5 style={styles.LablePadding}>Monthly calories intake</h5>
            <div style={styles.graphContainerLine}>
              <LineChart data={this.state.data}
                  options={options} />
            </div>
        </div>
        <div style={styles.outsideBarGh}>
          <h5 style={styles.LablePadding}>Daily Water Intake</h5>
          <div style={styles.graphContainerBar}>
            <BarChart data={this.state.data2}
             options={options} />
          </div>
        </div>
        <br />
        <div style={styles.outsideBarGh2}>
            <h5 style={styles.LablePadding}>Dispensed Pill</h5>
            <div style={styles.graphContainerBar2}>
                <BarChart data={this.state.data3}
                options={options} />
            </div>
        </div>
        <div style={styles.outsideBarGh3}>
            <h5 style={styles.LablePadding}>Dispensed Water</h5>
            <div style={styles.graphContainerBar3}>
                <BarChart data = {this.state.data4} 
                options={options}/>
            </div>
        </div>
        </div>
      )
    }
  }
  
  export default Home;
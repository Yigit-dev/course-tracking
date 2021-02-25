import {Line} from 'react-chartjs-2';

const LineChart = () => {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        pointRadius: 6,
        pointHoverRadius: 10
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
        pointRadius: 6,
        pointHoverRadius: 10
      }
    ],
  };

  const options = {
    scales: {
      xAxes: [{
         gridLines: {
            display: false
         }
      }],
      yAxes: [{
         gridLines: {
            display: false
         },
         ticks:{
          min : 0,
          stepSize : 20,
          fontColor : "#808191",
          fontSize : 14
        }
      }]
    },
    chartArea: {
      backgroundColor: 'rgba(251, 85, 85, 1)'
    }
   
  }

  return (
    <Line data={data} options={options}/>
  )
}

export default LineChart

import './line.css';
import { useRef } from 'react';
import { Line, getElementsAtEvent } from 'react-chartjs-2';
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale, //x-axis
  LinearScale, //y-axis
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

Chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

function Line_graph() {
  const data ={
    labels: [1,2,3],
    datasets: [{
        labels: 'sales of this week',
        data: [3,6,9,3.69],
        backgroundColor: 'aqua',
        borderColor: 'black',
        pointBorderColor: 'aqua',
        fill: true,
        tension: 0.4
    }
  ]
  }

  const options ={
    plugins: {
      legend: true
    },
    scales: {
      y: {
        min: 3,
        max: 9
      }
    }
  }

  const chartRef = useRef();
  const onhover = (event) => {
    console.log(chartRef)
    console.log(getElementsAtEvent(chartRef.current,event));
  }

  return (
    <div className="Line_grp">
      <h1>ChartJS with React</h1>
      <div style={{
        width: '600px',
        height: '300px'
      }}>
      <Line
       data = {data}
       options={options}
       onhover = {onhover}
       ref = {chartRef}
      >
      </Line>
      </div>
    </div>
  );
}

export default App;

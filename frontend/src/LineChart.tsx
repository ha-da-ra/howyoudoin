import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        offset:true,
        min: -2,
        max: 2,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const moodData = [0,1,2,0,-1,-1,-2];
const moodColors = moodData.map(mood => {
  switch(mood) {
    case -2:
      return "rgba(194, 70, 100, 0.5)"
    case -1:
      return "rgba(129, 70, 194, 0.5)"
    case 0:
      return "rgba(70, 155, 194, 0.5)"
    case 1: 
    return "rgba(70, 194, 158, 0.5)"
    case 2:
      return "rgba(70, 194, 78, 0.5)"
  }});
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: moodData,
      borderColor: "rgb(199, 199, 199)",
      pointBorderColor: moodColors,
      pointBackgroundColor: moodColors,
      pointStyle: 'circle',
      pointRadius: 10
    }
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}

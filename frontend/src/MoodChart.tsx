import { CircularProgress } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  ChartData,
  Point,
  ChartOptions,
  TimeScale
} from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import "chartjs-adapter-date-fns";
import {de} from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getMoodColor } from './moodData/getMoodColor';
import { getMoodData } from './moodData/getMoodData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Tooltip
);

const options: ChartOptions<"line"> =
{

  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      offset: true,
      min: -2,
      max: 2,
      ticks: {
        stepSize: 1
      }
    },
    x: {
      type: 'time',
      adapters: {
        date: {
          locale: de
        }
      },
      time: {
        unit: 'day'
      }
    }
  }
};

export function MoodChart() {
  const [chartData, setChartData] = useState<ChartData<"line", (number | Point | null)[], unknown>>();

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      let moodData = await getMoodData();
      const moodColors = moodData.map(mood => getMoodColor(mood.value));
      const data: ChartData<"line", (number | Point | null)[], unknown> = {
        labels: moodData.map((m) => m.changedAt),
        datasets: [
          {
            label: 'Dataset 1',
            data: moodData.map((m) => m.value),
            borderColor: "rgb(199, 199, 199)",
            pointBorderColor: moodColors,
            pointBackgroundColor: moodColors,
            pointStyle: 'circle',
            pointRadius: 10
          }
        ],
      };
      setChartData(data);
    }

    fetchData().catch(console.error);
  }, [])
  if (!chartData) {
    return < CircularProgress />;
  }
  return <Line options={options} data={chartData} />;
}

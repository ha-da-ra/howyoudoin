import { CircularProgress, Typography } from '@mui/material';
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
import { de } from 'date-fns/locale';
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

export interface MoodChartProps {
  year:number,
  month: number
}


export function MoodChart(props: MoodChartProps) {
  const {year, month} = props;
  const [chartData, setChartData] = useState<ChartData<"line", (number | Point | null)[], unknown>>();
  const [dataHasLoaded, setDataHasLoaded] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      setChartData(undefined);
      const chartData = await loadChartData(year, month);
      if(chartData){
        setChartData(chartData);
      }
      setDataHasLoaded(true);
    }

    fetchData().catch(console.error);
  }, [month, year]);
  if (!dataHasLoaded) {
    return < CircularProgress />;
  }
  else if (!chartData){
    return <Typography variant="h2" sx={{color:'gray', mt:15}}>No data</Typography>
  }
  return <Line options={options} data={chartData} />;
}



async function loadChartData(year: number, month: number) {
  let moodData = await getMoodData(year, month);
  if (moodData.length < 1) return undefined;
  const moodColors = moodData.map(mood => getMoodColor(mood.value));
  const data: ChartData<"line", (number | Point | null)[], unknown> = {
    labels: moodData.map((m) => m.changedAt),
    datasets: [
      {
        data: moodData.map((m) => m.value),
        borderColor: "rgb(199, 199, 199)",
        pointBorderColor: moodColors,
        pointBackgroundColor: moodColors,
        pointStyle: 'circle',
        pointRadius: 10
      }
    ]
  };
  return data;
}


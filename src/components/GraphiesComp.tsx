import { GraphieType } from '@/types/graphies'
//Imports do chartjs
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2' // são por conta deses dois imports que defino tipo por meio da tag
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend
)

type GraphiesProps = GraphieType

function Graphies({ labels, data, type }: GraphiesProps) {
  const options = {
    responsive: true,
    scales: {
      x: {
        border: { display: false },
        grid: { display: false },
        ticks: {
          color: 'gray',
        },
      },
      y: {
        border: { display: false },
        grid: {
          color: 'gray',
        },
        ticks: {
          color: 'gray',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  const chartData = {
    labels,
    datasets: [
      {
        data,
        borderColor: 'rgb(12, 112, 242)',
        backgroundColor: 'rgba(12, 102, 242, 0.5)',
      },
    ],
  }

  return type === 'bar' ? (
    <Bar options={options} data={chartData} />
  ) : (
    <Line options={options} data={chartData} />
  )
}
export default Graphies

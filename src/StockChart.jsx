import {Bar} from "react-chartjs-2";
export default function StockChart({ stocks }) {
  const data = {
    labels: stocks.map((s) => s.symbol),
    datasets: [
      {
        label: "Stock Price ($)",
        data: stocks.map((s) => s.price),
        backgroundColor: "rgba(96, 165, 250, 0.7)",
        borderColor:"rgba(96,165,250,1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels:{
          color:"#e5e7eb",
        },
      },
    },
    scales:{
      x:{
        ticks:{color:"#9ca3af"},
        grid:{color:"#374151"},
      },
      y:{
        ticks:{color:"#9ca3af"},
        grid:{color:"#374151"},
      },
    },
  };
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow mb-6">
      <Bar data={data} options={options} />
    </div>
  );
}

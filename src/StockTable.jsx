export default function StockTable({ stocks }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-700 rounded-lg">
        <thead className="bg-gray-900">
          <tr>
            <th className="px-4 py-2 text-left">Symbol</th>
            <th className="px-4 py-2 text-left">Price ($)</th>
            <th className="px-4 py-2 text-left">% Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol} className="border-t border-gray-700 hover:bg-gray-800">
              <td className="px-4 py-2 text-gray-100 font-medium">{stock.symbol}</td>
              <td className="px-4 py-2">
                {stock.price.toFixed(2)}
              </td>
              <td className={`px-4 py-2 font-semibold ${
                  stock.changePercent >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}>
                {stock.changePercent.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


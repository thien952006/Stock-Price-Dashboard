import {useEffect,useState} from "react";
import {fetchStock} from "./api";
import StockTable from "./StockTable";
import StockChart from "./StockChart";
import "./ChartConfig";
const SYMBOLS=["AAPL", "MSFT", "GOOGL", "TSLA","NVDA","AMZN","META","NFLX","INTC","AMD","TSM","ORCL","IBM","VFS"];
export default function App() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStocks() {
      const results = await Promise.all(
        SYMBOLS.map((symbol) => fetchStock(symbol))
      );
      setStocks(results);
      setLoading(false);
    }
  loadStocks();
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
        Stock Price Dashboard
        </h1>

        {loading ? (<p className="text-gray-600">Loading stock data...</p>) : (
          <>
          <StockChart stocks={stocks}/>
          <StockTable stocks={stocks}/>
          </>
        )}
      </div>
    </div>
  );
}
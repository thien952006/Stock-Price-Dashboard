const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
const BASE_URL = "https://finnhub.io/api/v1";
export async function fetchStock(symbol) {
  const res = await fetch(
    `${BASE_URL}/quote?symbol=${symbol}&token=${API_KEY}`
  );
  const data = await res.json();
  return {
    symbol,
    price: data.c,
    changePercent: data.dp,
  };
}


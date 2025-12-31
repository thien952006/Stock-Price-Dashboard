# Stock Price Dashboard

A modern, responsive stock price dashboard built with React, Vite, and Tailwind CSS. Displays real-time stock data from Finnhub API with interactive charts.

## Features

### Core Requirements ✅
- **Table View**: Displays stock symbol, price, and % change in a responsive table
- **Tailwind CSS**: Modern, responsive styling
- **Real-time Data**: Fetches data from Finnhub API

### Bonus Features ✨
- **Search Functionality**: Filter stocks by symbol
- **Sorting**: Click column headers to sort by symbol, price, or % change
- **Interactive Charts**: Expandable charts showing 1D, 1W, and 1M price history (Chart.js)
- **Loading States**: Shows loading indicators while fetching data
- **Error Handling**: Graceful error handling for API failures
- **Responsive Design**: Works on all screen sizes

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Finnhub API key (free at [finnhub.io](https://finnhub.io))

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd stock-price-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_FINNHUB_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variable `VITE_FINNHUB_API_KEY` in project settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable `VITE_FINNHUB_API_KEY` in site settings
6. Deploy!

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Set `base` in `vite.config.js` to your repository name
4. Run: `npm run deploy`
5. Add environment variable as GitHub Secret (note: GitHub Pages doesn't support env vars directly - consider using a different deployment method)

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Chart.js / react-chartjs-2** - Charting library
- **Finnhub API** - Stock market data

## Project Structure

```
src/
  ├── api.js           # API functions for fetching stock data
  ├── App.jsx          # Main app component
  ├── StockTable.jsx   # Table component with search and sorting
  ├── StockChart.jsx   # Chart component for price history
  ├── ChartConfig.js   # Chart.js configuration
  └── main.jsx         # Entry point
```

## License

ISC

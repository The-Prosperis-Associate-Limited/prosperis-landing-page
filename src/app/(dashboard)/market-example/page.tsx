"use client";

import { useMarketData } from "@/hooks/useMarketData";

export default function MarketMonitoringPage() {
  const { stocks, isLoading, updatePrice, isUpdating } = useMarketData();

  if (isLoading) return <div>Loading Market Data..</div>;

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Real-time Stocks</h1>

      <div className="grid gap-4">
        {stocks?.map((stock) => (
          <div
            key={stock.id}
            className="flex justify-between items-center p-4 border rounded-xl shadow-sm"
          >
            <div>
              <p className="font-bold">{stock.symbol}</p>
              <p className="text-sm text-gray-500">
                ${stock.price.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() =>
                updatePrice({ id: stock.id, price: stock.price + 100 })
              }
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold disabled:opacity-50"
              disabled={isUpdating}
            >
              {isUpdating ? "Updating..." : "Increase Price (+100)"}
            </button>
          </div>
        ))}
      </div>

      {!stocks?.length && <p>No stocks currently monitored.</p>}
    </div>
  );
}

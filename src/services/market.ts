import { api } from "@/lib/api/axios";

export interface Stock {
  id: string;
  symbol: string;
  price: number;
}

export const marketService = {
  getStocks: async () => {
    const { data } = await api.get<Stock[]>("/market/stocks");
    return data;
  },

  updatePrice: async (id: string, newPrice: number) => {
    const { data } = await api.patch<Stock>(`/market/stocks/${id}`, {
      price: newPrice,
    });
    return data;
  },
};

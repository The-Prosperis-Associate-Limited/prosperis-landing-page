import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { marketService, Stock } from "@/services/market";
import { toast } from "react-hot-toast";

export function useMarketData() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["market", "stocks"],
    queryFn: marketService.getStocks,
    staleTime: 30000,
  });

  const mutation = useMutation({
    mutationFn: ({ id, price }: { id: string; price: number }) =>
      marketService.updatePrice(id, price),
    onSuccess: (updatedStock) => {
      queryClient.setQueryData<Stock[]>(["market", "stocks"], (old) =>
        old?.map((s) => (s.id === updatedStock.id ? updatedStock : s)),
      );

      toast.success(`Updated ${updatedStock.symbol} price successfully!`);
    },

    onError: (error) => {
      toast.error("Failed to update price. Please try again.");
      console.error(error);
    },
  });

  return {
    stocks: query.data,
    isLoading: query.isLoading,
    isRefetching: query.isRefetching,
    updatePrice: mutation.mutate,
    isUpdating: mutation.isPending,
    error: query.error,
  };
}

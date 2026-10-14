import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api/axios";

export function useUser() {
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const { data } = await api.get("/auth/me");
      return data;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });
}

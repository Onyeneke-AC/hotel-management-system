import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "../../services/apiDashboard";

export function useSummary() {
  const {
    data: summary,
    isLoading: isLoadingSummary,
    error,
  } = useQuery({
    queryKey: ["summary"],
    queryFn: getDashboardSummary,
  });

  return { summary, isLoadingSummary, error };
}

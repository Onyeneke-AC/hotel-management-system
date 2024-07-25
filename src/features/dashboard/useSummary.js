import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "../../services/apiDashboard";

export function useSummary(startDate, endDate) {
  const {
    data: summary,
    isLoading: isLoadingSummary,
    error,
  } = useQuery({
    queryKey: ["summary", startDate, endDate],
    queryFn: () => getDashboardSummary(startDate, endDate),
  });

  return { summary, isLoadingSummary, error };
}

import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export function useExportBooking() {
  const {
    isLoadingExport,
    data: exportBooking,
    error,
  } = useQuery({
    queryKey: ["export"],
    queryFn: () => getBooking(),
    retry: false,
  });
  return { isLoadingExport, exportBooking, error };
}

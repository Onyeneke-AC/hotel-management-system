import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings(startDate, endDate) {
  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", startDate, endDate],
    queryFn: () => getBookings(startDate, endDate),
  });

  return { bookings, isLoading, error };
}

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGuestBookings } from "../../services/apiGuests";

export function useGuestBookings() {
  const { guestId } = useParams();

  const {
    isLoading: isLoadingGuestBookings,
    data: guestBookings,
    error,
  } = useQuery({
    queryKey: ["guestBookings", guestId],
    queryFn: () => getGuestBookings(guestId),
    retry: false,
  });
  return { isLoadingGuestBookings, guestBookings, error };
}

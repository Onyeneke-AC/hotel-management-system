import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getGuestById } from "../../services/apiGuests";

export function useGuest(customerID) {
  const { guestId: paramGuestId } = useParams();

  const guestId = customerID || paramGuestId;

  const {
    isLoading: isLoadingGuest,
    data: guest,
    error,
  } = useQuery({
    queryKey: ["guest", guestId],
    queryFn: () => getGuestById(guestId),
    retry: false,
  });
  return { isLoadingGuest, guest, error };
}

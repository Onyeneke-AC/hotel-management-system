import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoomBooking } from "../../services/apiBookings";

export function useRoomBooking() {
  const { bookingId, roomBookingId } = useParams();

  const {
    data: roomBooking,
    isLoading: isLoadingRoomBooking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId, roomBookingId],
    queryFn: () => getRoomBooking(bookingId, roomBookingId),
  });

  return { roomBooking, isLoadingRoomBooking, error };
}

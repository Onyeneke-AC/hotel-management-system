import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndUpdateBooking as updateBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useEditBooking() {
  const queryClient = useQueryClient();

  const { mutate: updateBooking, isLoading: isUpdatingBooking } = useMutation({
    mutationFn: ({ newBookingData, bookingId, roomBookingId }) =>
      updateBookingApi(newBookingData, bookingId, roomBookingId),
    onSuccess: () => {
      toast.success("Booking successfully updated");

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateBooking, isUpdatingBooking };
}

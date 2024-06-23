import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndUpdateBooking as updateBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useEditBooking() {
  const queryClient = useQueryClient();

  const { mutate: updateBooking, isLoading: isUpdatingBooking } = useMutation({
    mutationFn: ({ newBookingData, id }) =>
      updateBookingApi(newBookingData, id),
    onSuccess: () => {
      toast.success("Booking successfully updated");

      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateBooking, isUpdatingBooking };
}

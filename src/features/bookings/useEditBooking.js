import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editBooking as editBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useEditBooking() {
  const queryClient = useQueryClient();

  const { mutate: editBooking, isLoading: isEditing } = useMutation({
    mutationFn: ({ editedBookingData, id }) =>
      editBookingApi(editedBookingData, id),
    onSuccess: () => {
      toast.success("Booking successfully edited");

      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { editBooking, isEditing };
}

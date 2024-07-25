import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingCheckIn } from "../../services/apiCheck";
import toast from "react-hot-toast";

export function useCheckin() {
  const queryClient = useQueryClient();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: (id) => bookingCheckIn(id),
    onSuccess: () => {
      toast.success("Booking has successfully been checked in");

      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCheckingIn, checkin };
}

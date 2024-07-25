import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingCheckOut } from "../../services/apiCheck";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (id) => bookingCheckOut(id),
    onSuccess: () => {
      toast.success("Booking has successfully been checked out");

      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCheckingOut, checkout };
}

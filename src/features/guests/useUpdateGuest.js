// This is for the admin
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndUpdateGuest as updateGuestApi } from "../../services/apiGuests";
import toast from "react-hot-toast";

export function useUpdateGuest() {
  const queryClient = useQueryClient();

  const { mutate: updateGuest, isLoading: isUpdatingGuest } = useMutation({
    mutationFn: ({ newGuestData, id }) => updateGuestApi(newGuestData, id),
    onSuccess: () => {
      toast.success("Guest has successfully been updated");

      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdatingGuest, updateGuest };
}

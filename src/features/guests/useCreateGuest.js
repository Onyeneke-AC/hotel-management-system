import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createAndUpdateGuest as createGuestApi } from "../../services/apiGuests";

export function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate: createGuest, isLoading: isCreatingGuest } = useMutation({
    mutationFn: createGuestApi,
    onSuccess: () => {
      toast.success("New guest successfully created");

      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createGuest, isCreatingGuest };
}

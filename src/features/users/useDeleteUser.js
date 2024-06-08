import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser as deleteUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteUser, isLoading: isDeletingUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      toast.success(`User has successfully been deleted`);

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: () => {
      toast.error("Failed to delete user");
    },
  });
  return { deleteUser, isDeletingUser };
}

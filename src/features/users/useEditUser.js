// for the current user
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUserPassword } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useEditUserPassword() {
  const queryClient = useQueryClient();

  const { mutate: editUserPassword, isLoading: isUpdatingPassword } =
    useMutation({
      mutationFn: ({ passwordData, id }) =>
        updateCurrentUserPassword(passwordData, id),
      onSuccess: (user) => {
        queryClient.setQueryData(["user"], user);
        toast.success("User password successfully updated");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  return { editUserPassword, isUpdatingPassword };
}

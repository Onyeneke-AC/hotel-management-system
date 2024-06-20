// This is for the admin
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupAndUpdate as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newUserData, id }) => updateUserApi(newUserData, id),
    onSuccess: () => {
      toast.success("User has successfully been updated");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}

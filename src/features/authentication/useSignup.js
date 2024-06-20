import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupAndUpdate as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created!");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { signup, isCreating };
}

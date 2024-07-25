import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: (data) => {
      queryClient.removeQueries();
      window.localStorage.removeItem("accessToken");
      window.localStorage.removeItem("userDetails");
      toast.success(data.message);
      navigate("/login", { replace: true });
    },
  });
  return { logout, isLoading };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUserDetails } from "../../context/UserDetailsContext";

export function useLogin() {
  const queryClient = useQueryClient();
  const { setUserDetails } = useUserDetails();

  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (userData) => {
      setUserDetails(userData.user);
      queryClient.setQueryData(["user"], userData.user);
      window.localStorage.setItem("accessToken", userData.token);
      window.localStorage.setItem("userDetails", JSON.stringify(userData.user));
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error("Unsuccessful login attempt. Check your email or password");
    },
  });
  return { login, isLoading };
}

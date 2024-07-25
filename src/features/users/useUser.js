import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../services/apiAuth";

export function useUser(userId) {
  const {
    isLoading: isLoadingUser,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
    retry: false,
  });
  return { isLoadingUser, user, error };
}

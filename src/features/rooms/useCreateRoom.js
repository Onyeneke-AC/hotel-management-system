import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createRoom as createRoomApi } from "../../services/apiRooms";

export function useCreateRoom() {
  const queryClient = useQueryClient();

  const { mutate: createRoom, isLoading: isCreating } = useMutation({
    mutationFn: createRoomApi,
    onSuccess: () => {
      toast.success("New room successfully created");

      queryClient.invalidateQueries({
        queryKey: ["room"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createRoom, isCreating };
}

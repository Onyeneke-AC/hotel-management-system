import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteRoomApi } from "../../services/apiRooms";
import toast from "react-hot-toast";

export function useDeleteRoom() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteRoom } = useMutation({
    mutationFn: deleteRoomApi,
    onSuccess: () => {
      toast.success("Room successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["room"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteRoom };
}

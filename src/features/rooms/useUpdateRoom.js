import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndUpdateRoom as updateRoomApi } from "../../services/apiRooms";
import toast from "react-hot-toast";

export function useUpdateRoom() {
  const queryClient = useQueryClient();

  const { mutate: updateRoom, isLoading: isUpdatingRoom } = useMutation({
    mutationFn: ({ newRoomData, id }) => updateRoomApi(newRoomData, id),
    onSuccess: () => {
      toast.success("Room has successfully been updated");

      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateRoom, isUpdatingRoom };
}

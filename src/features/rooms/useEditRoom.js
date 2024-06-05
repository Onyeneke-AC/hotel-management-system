import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editRoom as editRoomApi } from "../../services/apiRooms";
import toast from "react-hot-toast";

export function useEditRoom() {
  const queryClient = useQueryClient();

  const { mutate: editRoom, isLoading: isEditing } = useMutation({
    mutationFn: ({ newRoomData, id }) => editRoomApi(newRoomData, id),
    onSuccess: () => {
      toast.success("Room has successfully been edited");

      queryClient.invalidateQueries({
        queryKey: ["room"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editRoom };
}

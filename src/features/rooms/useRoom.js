import { useQuery } from "@tanstack/react-query";
import { getRoomById } from "../../services/apiRooms";

export function useRoom(roomID) {
  const roomId = roomID;

  const {
    isLoading: isLoadingRoom,
    data: room,
    error,
  } = useQuery({
    queryKey: ["room", roomId],
    queryFn: () => getRoomById(roomId),
    retry: false,
  });
  return { isLoadingRoom, room, error };
}

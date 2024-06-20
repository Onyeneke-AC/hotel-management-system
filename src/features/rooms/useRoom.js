import { useQuery } from "@tanstack/react-query";
import { getGuestById } from "../../services/apiGuests";

export function useRoom(roomID) {
  const roomId = roomID;

  const {
    isLoadingRoom,
    data: room,
    error,
  } = useQuery({
    queryKey: ["room", roomId],
    queryFn: () => getGuestById(roomId),
    retry: false,
  });
  return { isLoadingRoom, room, error };
}

import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";

export function useRooms() {
  const {
    isLoading: isLoadingRooms,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  return { isLoadingRooms, rooms, error };
}

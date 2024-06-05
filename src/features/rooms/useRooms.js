import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";

export function useRooms() {
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
  });
  return { isLoading, rooms, error };
}

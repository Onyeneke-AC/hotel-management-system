import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import RoomRow from "./RoomRow";
import Empty from "../../ui/Empty";
import { useRooms } from "./useRooms";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import { PAGE_SIZE } from "../../utils/constants";
import Pagination from "../../ui/Pagination";

function RoomTable() {
  const { rooms, isLoadingRooms } = useRooms();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoadingRooms) return <Spinner />;

  if (!rooms) return <Empty resourceName="rooms" />;

  const filterValue = searchParams.get("status") || "all";

  let filteredRooms = rooms;

  if (filterValue === "all") filteredRooms = rooms;

  if (filterValue === "available")
    filteredRooms = rooms.filter((room) => room.status === "available");

  if (filterValue === "cleaning")
    filteredRooms = rooms.filter((room) => room.status === "cleaning");

  if (filterValue === "unavailable")
    filteredRooms = rooms.filter((room) => room.status === "Unavailable");

  const roomsCount = filteredRooms.length;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedRooms = filteredRooms.slice(startIndex, endIndex);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.3fr 1fr 1.9fr 1.2fr 0.3fr">
        <Table.Header>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Description</div>
          <div>Status</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filterValue !== "all" ? filteredRooms : paginatedRooms}
          render={(room) => <RoomRow key={room.ID} room={room} />}
          empty={`No room is ${filterValue}`}
        />
        <Table.Footer>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            count={roomsCount}
          />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default RoomTable;

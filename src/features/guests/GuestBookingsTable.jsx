import { useState } from "react";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import GuestBookingRow from "./GuestBookingRow";
import { useGuestBookings } from "./useGuestBookings";
import Empty from "../../ui/Empty";
import { PAGE_SIZE } from "../../utils/constants";

function GuestBookingsTable() {
  const { guestBookings, isLoadingGuestBookings } = useGuestBookings();

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoadingGuestBookings) return <Spinner />;

  if (!guestBookings.length)
    return <Empty resourceName="previous or current bookings" />;

  const guestBookingsCount = guestBookings.length;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedGuestBookings = guestBookings.slice(startIndex, endIndex);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.2fr 2.4fr 1.8fr 1.4fr 3.2rem">
        <Table.Header>
          <div>Room</div>
          <div>Amount</div>
          <div>Dates</div>
          <div>Payment Status</div>
          <div>Checked In</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={paginatedGuestBookings}
          render={(booking) => (
            <GuestBookingRow key={booking.ID} booking={booking} />
          )}
          empty="This guest has no previous or current booking"
        />
        <Table.Footer>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            count={guestBookingsCount}
          />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default GuestBookingsTable;

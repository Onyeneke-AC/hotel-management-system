import { useState } from "react";

import { useDateFilterBookings } from "../../context/DateFilterBookings";
import { useBookings } from "./useBookings";
import { PAGE_SIZE } from "../../utils/constants";

import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { startDate, endDate } = useDateFilterBookings();
  const { bookings: loadedBookings, isLoading } = useBookings(
    startDate,
    endDate
  );

  console.log(loadedBookings);

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <Spinner />;

  const bookings = loadedBookings || [];

  if (!bookings)
    return <Empty resourceName="bookings within this date range" />;

  // const filterStartDate = new Date(startDate) || null;
  // const filterEndDate = new Date(endDate) || null;

  // let filteredBookings = bookings;

  // if (filterStartDate && filterEndDate)
  //   filteredBookings = bookings.filter(
  //     (booking) =>
  //       new Date(booking.roomBookings[0].startDate) >= filterStartDate &&
  //       new Date(booking.roomBookings[0].endDate) <= filterEndDate
  //   );

  // const bookingsCount = filteredBookings.length;

  // const startIndex = (currentPage - 1) * PAGE_SIZE;
  // const endIndex = startIndex + PAGE_SIZE;
  // const paginatedBookings = filteredBookings.slice(startIndex, endIndex);

  const bookingsCount = bookings.length;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedBookings = bookings.slice(startIndex, endIndex);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Room</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Checked In</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={
          //   filterStartDate && filterEndDate
          //     ? filteredBookings
          //     : paginatedBookings
          // }
          data={paginatedBookings}
          render={(booking) => (
            <BookingRow key={booking.ID} booking={booking} />
          )}
          empty="There is no booking within this date range"
        />
        <Table.Footer>
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            count={bookingsCount}
          />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;

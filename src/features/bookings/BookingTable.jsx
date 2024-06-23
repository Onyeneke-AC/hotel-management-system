import { useBookings } from "./useBookings";

import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import { PAGE_SIZE } from "../../utils/constants";
import Pagination from "../../ui/Pagination";

// const bookings = [
//   {
//     customerID: 1,
//     bookingID: 1,
//     roomName: "001",
//     receptionist: "Anna baby",
//     amount: 300,
//     isPaid: false,
//     customer: { firstName: "Anna baby", email: "anthony@gmail.com" },
//     roomBookings: {
//       checkedIn: true,
//       numberOfNights: "2",
//       startDate: "2024-06-16T00:00:00",
//       endDate: "2024-06-18T00:00:00",
//     },
//   },
//   {
//     bookingID: 2,
//     roomBookings: {
//       checkedIn: false,
//       numberOfNights: "20",
//       startDate: "2024-06-20T00:00:00",
//       endDate: "2024-07-18T00:00:00",
//     },
//     roomName: "002",
//     amount: 500,
//     isPaid: true,
//     receptionist: "Osi baby",
//     customerID: 2,
//     customer: { firstName: "Gold", email: "gkv@hgjh.com" },
//   },
//   {
//     bookingID: 3,
//     roomBookings: {
//       checkedIn: true,
//       numberOfNights: "10",
//       startDate: "2024-06-18T00:00:00",
//       endDate: "2024-06-24T00:00:00",
//     },
//     roomName: "003",
//     amount: 50,
//     isPaid: false,
//     receptionist: "Erica baby",
//     customerID: 3,
//     customer: { firstName: "Teni", email: "CDEewfw12@hffj" },
//   },
// ];

function BookingTable() {
  const { bookings, isLoading } = useBookings();

  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resourceName="bookings" />;

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
          data={paginatedBookings}
          render={(booking) => (
            <BookingRow key={booking.ID} booking={booking} />
          )}
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

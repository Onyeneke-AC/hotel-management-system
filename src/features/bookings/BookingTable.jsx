import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";

const bookings = [
  {
    customerID: 1,
    bookingID: 1,
    roomName: "001",
    receptionist: "Anna baby",
    amount: 300,
    isPaid: false,
    customer: { firstName: "Anna baby", email: "anthony@gmail.com" },
    roomBookings: {
      checkedIn: true,
      numberOfNights: "2",
      startDate: "2024-06-16T00:00:00",
      endDate: "2024-06-18T00:00:00",
    },
  },
  {
    bookingID: 2,
    roomBookings: {
      checkedIn: false,
      numberOfNights: "20",
      startDate: "2024-06-20T00:00:00",
      endDate: "2024-07-18T00:00:00",
    },
    roomName: "002",
    amount: 500,
    isPaid: true,
    receptionist: "Osi baby",
    customerID: 2,
    customer: { firstName: "Gold", email: "gkv@hgjh.com" },
  },
  {
    bookingID: 3,
    roomBookings: {
      checkedIn: true,
      numberOfNights: "10",
      startDate: "2024-06-18T00:00:00",
      endDate: "2024-06-24T00:00:00",
    },
    roomName: "003",
    amount: 50,
    isPaid: false,
    receptionist: "Erica baby",
    customerID: 3,
    customer: { firstName: "Teni", email: "CDEewfw12@hffj" },
  },
];

function BookingTable() {
  const [searchParams] = useSearchParams();

  if (!bookings.length) return <Empty resourceName="bookings" />;

  const filterValue = searchParams.get("status") || "all";

  let filteredBookings;

  if (filterValue === "all") filteredBookings = bookings;

  if (filterValue === "checked-in")
    filteredBookings = bookings.filter(
      (booking) => booking.roomBookings.checkedIn === true
    );

  if (filterValue === "free")
    filteredBookings = bookings.filter(
      (booking) => booking.roomBookings.checkedIn === false
    );

  if (!filteredBookings.length) return <Empty resourceName="bookings" />;

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
          data={filteredBookings}
          render={(booking) => (
            <BookingRow key={booking.bookingID} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;

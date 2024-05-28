import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";

const bookings = [
  {
    roomBookings: {
      roomNumber: "002",
      numNights: "2",
      startDate: "2024-06-16T00:00:00",
      endDate: "2024-06-18T00:00:00",
    },
    amount: 300,
    isPaid: false,
    id: 1,
    receptionist: "Anna baby",
    customerId: 1,
    customer: { firstName: "Anna baby", email: "anthony@flask.com" },
    status: "checked-in",
  },
  {
    roomBookings: {
      roomNumber: "003",
      numNights: "20",
      startDate: "2024-06-20T00:00:00",
      endDate: "2024-07-18T00:00:00",
    },
    amount: 500,
    isPaid: false,
    id: 2,
    receptionist: "Osi baby",
    customerId: 2,
    customer: { firstName: "Gold", email: "gold@flask.com" },
    status: "checked-out",
  },
  {
    roomBookings: {
      roomNumber: "023",
      numNights: "10",
      startDate: "2024-06-18T00:00:00",
      endDate: "2024-06-24T00:00:00",
    },
    amount: 50,
    isPaid: false,
    id: 3,
    receptionist: "Erica baby",
    customerId: 3,
    customer: { firstName: "Teni", email: "teni@flask.com" },
    status: "unconfirmed",
  },
];

function BookingTable() {
  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Room</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={bookings}
        render={(booking) => (
          <BookingRow key={booking.customerId} booking={booking} />
        )}
      />
    </Table>
  );
}

export default BookingTable;

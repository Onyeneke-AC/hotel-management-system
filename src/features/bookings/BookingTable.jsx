import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";

const bookings = [
  {
    roomNumber: "23",
    numNights: "3",
    startDate: "01-04-2025",
    endDate: "04-04-2025",
    amount: "$300",
    isPaid: false,
    roomId: 1,
    customerId: 1,
    customer: { firstName: "Anna baby", email: "anthony@flask.com" },
    room: { name: "101" },
    status: "checked-in",
  },
  {
    roomNumber: "23",
    numNights: "3",
    startDate: "01-04-2025",
    endDate: "04-04-2025",
    amount: "$300",
    isPaid: false,
    roomId: 2,
    customerId: 2,
    customer: { firstName: "Gold", email: "gold@flask.com" },
    room: { name: "102" },
    status: "checked-out",
  },
  {
    roomNumber: "23",
    numNights: "3",
    startDate: "01-04-2025",
    amount: "$300",
    endDate: "04-04-2025",
    isPaid: false,
    roomId: 3,
    customerId: 3,
    customer: { firstName: "Teni", email: "teni@flask.com" },
    room: { name: "103" },
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

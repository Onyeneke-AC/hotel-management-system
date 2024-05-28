import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";

const bookings = [
  {
    roomNumber: "23",
    numNights: "2",
    startDate: "2024-06-16T00:00:00",
    endDate: "2024-06-18T00:00:00",
    amount: 300,
    isPaid: false,
    roomId: 1,
    customerId: 1,
    customer: { firstName: "Anna baby", email: "anthony@flask.com" },
    room: { name: "101" },
    status: "checked-in",
  },
  {
    roomNumber: "23",
    numNights: "20",
    startDate: "2024-06-20T00:00:00",
    endDate: "2024-07-18T00:00:00",
    amount: 500,
    isPaid: false,
    roomId: 2,
    customerId: 2,
    customer: { firstName: "Gold", email: "gold@flask.com" },
    room: { name: "102" },
    status: "checked-out",
  },
  {
    roomNumber: "23",
    numNights: "10",
    startDate: "2024-06-18T00:00:00",
    amount: 50,
    endDate: "2024-06-24T00:00:00",
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

import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";

const bookings = [
  {
    roomNumber: "23",
    guest: "Anna baby",
    numNights: "3",
    startDate: "01-04-2025",
    amount: "$300",
    endDate: "04-04-2025",
    isPaid: false,
    roomId: 1,
    customerId: 1,
  },
  {
    roomNumber: "23",
    guest: "Gold",
    numNights: "3",
    startDate: "01-04-2025",
    amount: "$300",
    endDate: "04-04-2025",
    isPaid: false,
    roomId: 2,
    customerId: 2,
  },
  {
    roomNumber: "23",
    guest: "Teni",
    numNights: "3",
    startDate: "01-04-2025",
    amount: "$300",
    endDate: "04-04-2025",
    isPaid: false,
    roomId: 3,
    customerId: 3,
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
        render={(booking) => <BookingRow key={booking.id} booking={booking} />}
      />
    </Table>
  );
}

export default BookingTable;

import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";

const bookings = [
  {
    roomNumber: "23",
    guest: "Anna baby",
    numNights: "3",
    startDate: "01-04-2025",
    Amount: "$300",
  },
  {
    roomNumber: "23",
    guest: "Gold",
    numNights: "3",
    startDate: "01-04-2025",
    Amount: "$300",
  },
  {
    roomNumber: "23",
    guest: "Teni",
    numNights: "3",
    startDate: "01-04-2025",
    Amount: "$300",
  },
];

function BookingTable() {
  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
      <Table.Header>
        <div>Cabin</div>
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

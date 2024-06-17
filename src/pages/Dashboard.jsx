import Row from "../ui/Row";
import Heading from "../ui/Heading";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import BookingTable from "../features/bookings/BookingTable";
import DashboardBookingTableFilter from "../features/dashboard/DashboardBookingTableFilter";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardBookingTableFilter />
      </Row>
      <DashboardLayout />
      <Row>
        <BookingTable />
      </Row>
    </>
  );
}

export default Dashboard;

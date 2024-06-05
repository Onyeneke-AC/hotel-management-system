import Row from "../ui/Row";
import Heading from "../ui/Heading";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import BookingTable from "../features/bookings/BookingTable";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
      </Row>
      <DashboardLayout />
      <Row>
        <BookingTable />
      </Row>
    </>
  );
}

export default Dashboard;

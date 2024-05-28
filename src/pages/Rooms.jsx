import AddRoom from "../features/rooms/AddRoom";
import RoomTable from "../features/rooms/RoomTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Rooms() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Rooms</Heading>
      </Row>
      <Row>
        <RoomTable />
        <AddRoom />
      </Row>
    </>
  );
}

export default Rooms;

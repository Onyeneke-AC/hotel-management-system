import { useUserDetails } from "../context/UserDetailsContext";
import AddRoom from "../features/rooms/AddRoom";
import RoomTable from "../features/rooms/RoomTable";
import RoomTableOperations from "../features/rooms/RoomTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Rooms() {
  const { userDetails } = useUserDetails();

  const { isAdmin } = userDetails;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Rooms</Heading>
        <RoomTableOperations />
      </Row>
      <Row>
        <RoomTable />
        {isAdmin && <AddRoom />}
      </Row>
    </>
  );
}

export default Rooms;

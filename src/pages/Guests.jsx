import AddGuest from "../features/guests/AddGuest";
import GuestTable from "../features/guests/GuestTable";
import ButtonGroup from "../ui/ButtonGroup";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Guests() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All guests</Heading>
      </Row>
      <Row>
        <GuestTable />
        <ButtonGroup>
          <AddGuest />
        </ButtonGroup>
      </Row>
    </>
  );
}

export default Guests;

import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import RoomRow from "./RoomRow";

const rooms = [
  {
    RoomBookings: { RoomId: 1 },
    Name: "001",
    Category: "Standard Luxury",
    Description: "1 bedroom standard",
    Price: 20000,
    Status: "checked-in",
  },
  {
    RoomBookings: { RoomId: 2 },
    Name: "002",
    Category: "Deluxe Luxury",
    Description: "2 bedroom standard",
    Price: 25000,
    Status: "unconfirmed",
  },
  {
    RoomBookings: { RoomId: 3 },
    Name: "003",
    Category: "Standard Aparte",
    Description: "3 bedroom standard",
    Price: 30000,
    Status: "checked-out",
  },
  {
    RoomBookings: { RoomId: 4 },
    Name: "004",
    Category: "Standard Luxury",
    Description: "1 bedroom standard",
    Price: 35000,
    Status: "unconfirmed",
  },
  {
    RoomBookings: { RoomId: 5 },
    Name: "005",
    Category: "Deluxe Aparte Luxury",
    Description: "1 bedroom standard",
    Price: 40000,
    Status: "checked-in",
  },
];

function RoomTable() {
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 1fr 1.8fr 1fr 0.6fr">
        <Table.Header>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Description</div>
          <div>Status</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={rooms}
          render={(room) => (
            <RoomRow key={room.RoomBookings.RoomId} room={room} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default RoomTable;

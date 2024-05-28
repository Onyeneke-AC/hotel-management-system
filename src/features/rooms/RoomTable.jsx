import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import RoomRow from "./RoomRow";

const rooms = [
  {
    id: 1,
    name: "001",
    category: "Standard Luxury",
    description: "1 bedroom standard",
    price: 20000,
    isBooked: true,
    isClean: true,
    isCheckedIn: false,
    customerId: 10,
  },
  {
    id: 2,
    name: "002",
    category: "Deluxe Luxury",
    description: "2 bedroom standard",
    price: 25000,
    isBooked: false,
    isClean: true,
    isCheckedIn: false,
    customerId: 20,
  },
  {
    id: 3,
    name: "003",
    category: "Standard Aparte",
    description: "3 bedroom standard",
    price: 30000,
    isBooked: true,
    isClean: false,
    isCheckedIn: true,
    customerId: 30,
  },
  {
    id: 4,
    name: "004",
    category: "Standard Luxury",
    description: "1 bedroom standard",
    price: 35000,
    isBooked: true,
    isClean: true,
    isCheckedIn: false,
    customerId: 40,
  },
  {
    id: 5,
    name: "005",
    category: "Deluxe Aparte Luxury",
    description: "1 bedroom standard",
    price: 40000,
    isBooked: true,
    isClean: true,
    isCheckedIn: false,
    customerId: 50,
  },
];

function RoomTable() {
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Booked</div>
          <div>Checked In</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={rooms}
          render={(room) => <RoomRow key={room.id} room={room} />}
        />
      </Table>
    </Menus>
  );
}

export default RoomTable;

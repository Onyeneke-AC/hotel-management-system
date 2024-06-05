import Table from "../../ui/Table";
import GuestRow from "./GuestRow";

const guests = [
  {
    name: "Ogunlade Temi",
    email: "anthony@ogunlade",
    phone: "08177323982",
    address: "no. 8 lokoja crescent agbara estate, ogun state",
    plateNumber: "76geyu",
    emergencyContact: "09139810993",
  },
  {
    name: "Ogunlade Temi",
    email: "anthony@ogunlade",
    phone: "08177323982",
    address: "no. 8 lokoja crescent agbara estate, ogun state",
    plateNumber: "76geyu",
    emergencyContact: "09139810993",
  },
  {
    name: "Ogunlade Temi",
    email: "anthony@ogunlade",
    phone: "08177323982",
    address: "no. 8 lokoja crescent agbara estate, ogun state",
    plateNumber: "76geyu",
    emergencyContact: "09139810993",
  },
];

function GuestTable() {
  return (
    <Table columns="1.2fr 1.2fr 2.2fr 1.2fr 1fr 3.2rem">
      <Table.Header>
        <div>Name</div>
        <div>Contact</div>
        <div>Address</div>
        <div>Emergency Contact</div>
        <div>Plate Number</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={guests}
        render={(guest) => <GuestRow key={guest.phone} guest={guest} />}
      />
    </Table>
  );
}

export default GuestTable;

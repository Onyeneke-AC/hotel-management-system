import { useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";
import GuestRow from "./GuestRow";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";

const guests = [
  {
    id: 1,
    name: "Ogunlade Temi",
    email: "anthony@ogunlade",
    phone: "08177323982",
    address: "no. 8 lokoja crescent agbara estate, ogun state",
    plateNumber: "76geyu",
    emergencyContact: "09139810993",
  },
  {
    id: 2,
    name: "lettima teni",
    email: "letima@ogunlade",
    phone: "08177323982",
    address: "no. 8 lokoja crescent agbara estate, ogun state",
    plateNumber: "48530",
    emergencyContact: "09139810993",
  },
  {
    id: 3,
    name: "Onye Anthony",
    email: "temi@hwhg.com",
    phone: "08177323982",
    address: "no. 8 lokoja crescent agbara estate, ogun state",
    plateNumber: "59329",
    emergencyContact: "09139810993",
  },
];

function GuestTable() {
  const [searchParams] = useSearchParams();

  if (!guests.length) return <Empty resourceName="guests" />;

  const filterValue = searchParams.get("searchValue");

  let filteredGuests = guests;

  if (filterValue)
    filteredGuests = guests.filter((guest) => {
      return (
        guest.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        guest.plateNumber.toLowerCase().includes(filterValue.toLowerCase()) ||
        guest.email.toLowerCase().includes(filterValue.toLowerCase())
      );
    });

  if (!filteredGuests.length) return <Empty resourceName="guests" />;

  return (
    <Menus>
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
          data={filteredGuests}
          render={(guest) => <GuestRow key={guest.id} guest={guest} />}
        />
      </Table>
    </Menus>
  );
}

export default GuestTable;

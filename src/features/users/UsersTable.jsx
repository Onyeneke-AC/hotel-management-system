import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import UsersRow from "./UsersRow";

const users = [
  {
    employeeID: 1,
    name: "Anna Bestie",
    email: "gatsi@hfjwefh",
    phone: "08148341933",
    role: "Business analyst",
    emergencyContact: "83912892381",
  },
  {
    employeeID: 2,
    name: "lettima pro",
    email: "hurwhgj@jjwgh",
    phone: "7263793831",
    role: "Cleaner",
    emergencyContact: "9992395933",
  },
  {
    employeeID: 3,
    name: "Anthony",
    email: "anthony@timeless.com",
    phone: "08169903718",
    role: "CEO",
    emergencyContact: "7082947291",
  },
  {
    employeeID: 4,
    name: "Akpesky Mena",
    email: "akpeskyMena@timeless.com",
    phone: "825982958",
    role: "Nwuye Odogwu",
    emergencyContact: "7258978235",
  },
  {
    employeeID: 5,
    name: "Gold",
    email: "gold@iieirj",
    phone: "902385932",
    role: "Investor",
    emergencyContact: "958923859",
  },
];

function UsersTable() {
  if (!users.length) return <Empty resourceName="user" />;

  return (
    <Menus>
      <Table columns="1.3fr 1.8fr 1fr 1.3fr 1.2fr 0.6fr">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Role</div>
          <div>Emergency Contact</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={users}
          render={(user) => <UsersRow key={user.employeeID} user={user} />}
        />
      </Table>
    </Menus>
  );
}

export default UsersTable;

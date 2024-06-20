import AddUser from "../features/users/AddUser";
import UsersTable from "../features/users/UsersTable";
import UsersTableOerations from "../features/users/UsersTableOerations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Users() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Users</Heading>
        <UsersTableOerations />
      </Row>
      <Row>
        <UsersTable />
        <AddUser />
      </Row>
    </>
  );
}

export default Users;

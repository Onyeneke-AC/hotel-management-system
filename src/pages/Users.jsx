import AddUser from "../features/users/AddUser";
import UsersTable from "../features/users/UsersTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Users() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Create a New User</Heading>
      </Row>
      <Row>
        <UsersTable />
        <AddUser />
      </Row>
    </>
  );
}

export default Users;

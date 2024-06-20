import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import UsersRow from "./UsersRow";
import { useUsers } from "./useUsers";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../ui/Pagination";
import { PAGE_SIZE } from "../../utils/constants";

// const users = [
//   {
//     employeeID: 1,
//     name: "Anna Bestie",
//     email: "gatsi@hfjwefh",
//     phone: "08148341933",
//     role: "Business analyst",
//     emergencyContact: "83912892381",
//   },
//   {
//     employeeID: 2,
//     name: "lettima pro",
//     email: "hurwhgj@jjwgh",
//     phone: "7263793831",
//     role: "Cleaner",
//     emergencyContact: "9992395933",
//   },
//   {
//     employeeID: 3,
//     name: "Anthony",
//     email: "anthony@timeless.com",
//     phone: "08169903718",
//     role: "CEO",
//     emergencyContact: "7082947291",
//   },
//   {
//     employeeID: 4,
//     name: "Akpesky Mena",
//     email: "akpeskyMena@timeless.com",
//     phone: "825982958",
//     role: "Nwuye Odogwu",
//     emergencyContact: "7258978235",
//   },
//   {
//     employeeID: 5,
//     name: "Gold",
//     email: "gold@iieirj",
//     phone: "902385932",
//     role: "Investor",
//     emergencyContact: "958923859",
//   },
// ];

function UsersTable() {
  const { users, isLoading } = useUsers();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) return <Spinner />;
  if (!users.length) return <Empty resourceName="user" />;

  const filterValue = searchParams.get("searchValue");

  let filteredUsers = users;

  if (filterValue)
    filteredUsers = users.filter((user) => {
      const firstName = user.firstName || "";
      const lastName = user.lastName || "";
      const role = user.role || "";
      const email = user.email || "";

      return (
        firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
        lastName.toLowerCase().includes(filterValue.toLowerCase()) ||
        role.toLowerCase().includes(filterValue.toLowerCase()) ||
        email.toLowerCase().includes(filterValue.toLowerCase())
      );
    });

  const usersCount = filteredUsers.length;

  const totalPages = Math.ceil(usersCount / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
  }

  if (!filteredUsers.length) return <Empty resourceName="users" />;

  return (
    <Menus>
      <Table columns="1.4fr 2.2fr 1fr 1.3fr 1fr 0.2fr">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Phone</div>
          <div>Role</div>
          <div>Emergency Contact</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={paginatedUsers}
          render={(user) => <UsersRow key={user.ID} user={user} />}
        />
        <Table.Footer>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            count={usersCount}
          />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UsersTable;

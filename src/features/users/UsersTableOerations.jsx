import SearchGuest from "../../ui/SearchGuest";
import TableOperations from "../../ui/TableOperations";

function UsersTableOerations() {
  return (
    <TableOperations>
      <SearchGuest placeholder="search user..." />
    </TableOperations>
  );
}

export default UsersTableOerations;

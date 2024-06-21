import SearchGuest from "../../ui/SearchGuest";
import TableOperations from "../../ui/TableOperations";

function GuestTableOperations() {
  return (
    <TableOperations>
      <SearchGuest placeholder="search guest..." />
    </TableOperations>
  );
}

export default GuestTableOperations;

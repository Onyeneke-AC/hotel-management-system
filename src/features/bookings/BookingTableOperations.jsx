import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-in", label: "Checked in" },
          { value: "free", label: "Unoccupied" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;

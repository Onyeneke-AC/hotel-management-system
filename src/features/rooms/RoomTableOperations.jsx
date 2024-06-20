import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function RoomTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "available", label: "Available" },
          { value: "cleaning", label: "Cleaning" },
          { value: "unavailable", label: "Unavailable" },
        ]}
      />
    </TableOperations>
  );
}

export default RoomTableOperations;

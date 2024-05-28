import Menus from "../../ui/Menus";
import Table from "../../ui/Table";

function RoomTable() {
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Table.Header>
      </Table>
    </Menus>
  );
}

export default RoomTable;

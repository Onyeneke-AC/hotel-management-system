import styled from "styled-components";
import Table from "../../ui/Table";
import { HiEllipsisVertical } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Tag from "../../ui/Tag";

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const StyledPrice = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const statusToTagName = {
  "checked-in": "green",
  "checked-out": "silver",
  unconfirmed: "blue",
};

function RoomRow({ room }) {
  const { Name, Category, Description, Price, status } = room;

  return (
    <Table.Row>
      <Room>{Name}</Room>
      <Room>{Category}</Room>
      <StyledPrice>{formatCurrency(Price)}</StyledPrice>
      <div>{Description}</div>
      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
      <div>
        <HiEllipsisVertical />
      </div>
    </Table.Row>
  );
}

export default RoomRow;

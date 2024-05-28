import styled from "styled-components";
import Table from "../../ui/Table";
import { HiEllipsisVertical } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

function RoomRow({ room }) {
  const {
    id,
    name,
    category,
    description,
    price,
    isBooked,
    isClean,
    isCheckedIn,
    customerId,
  } = room;

  return (
    <Table.Row>
      <Room>{name}</Room>
      <Room>{category}</Room>
      <Price>{formatCurrency(price)}</Price>
      <div>{isBooked}</div>
      <div>{isCheckedIn}</div>
      <div>
        <HiEllipsisVertical />
      </div>
    </Table.Row>
  );
}

export default RoomRow;

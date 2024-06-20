import styled from "styled-components";
import Table from "../../ui/Table";
import { HiPencil } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import Modal from "../../ui/Modal";
import CreateRoomForm from "./CreateRoomForm";

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

const StyledEdit = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const statusToTagName = {
  "checked-in": "green",
  "checked-out": "silver",
  unconfirmed: "blue",
};

function RoomRow({ room }) {
  const { name, category, description, price, status } = room;

  return (
    <Table.Row>
      <Room>{name}</Room>
      <Room>{category}</Room>
      <StyledPrice>{formatCurrency(price)}</StyledPrice>
      <div>{description}</div>
      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
      <StyledEdit>
        <Modal>
          <Modal.Open opens="edit-room">
            <HiPencil />
          </Modal.Open>
          <Modal.Window name="edit-room">
            <CreateRoomForm roomToEdit={room} />
          </Modal.Window>
        </Modal>
      </StyledEdit>
    </Table.Row>
  );
}

export default RoomRow;

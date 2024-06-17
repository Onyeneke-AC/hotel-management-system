import styled from "styled-components";
import Table from "../../ui/Table";
// import Menus from "../../ui/Menus";
import {
  HiEllipsisVertical,
  // HiOutlineCheck,
  // HiOutlineXMark,
  //   HiArrowDownOnSquare,
  //   HiArrowUpOnSquare,
  // HiEye,
  //   HiTrash,
} from "react-icons/hi2";
// import { useNavigate } from "react-router-dom";
// import Modal from "../../ui/Modal";
// import ConfirmDelete from "../../ui/ConfirmDelete";

const StyledText = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Number = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function GuestRow({
  guest: { name, email, phone, address, emergencyContact, plateNumber },
}) {
  // const navigate = useNavigate();

  return (
    <Table.Row>
      <StyledText>{name}</StyledText>

      <Stacked>
        <span>{email}</span>
        <Number>{phone}</Number>
      </Stacked>

      <StyledText>{address}</StyledText>

      <StyledText>{emergencyContact}</StyledText>

      <StyledText>{plateNumber}</StyledText>

      {/* <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                id={cabinId}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div> */}
    </Table.Row>
  );
}

export default GuestRow;

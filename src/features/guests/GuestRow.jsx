import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import CreateGuestForm from "./CreateGuestForm";
import { HiEye, HiPencil } from "react-icons/hi2";

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

const StyledOther = styled.div`
  display: flex;
  justify-content: center;
`;

function GuestRow({
  guest: {
    firstName,
    lastName,
    email,
    phone,
    address,
    emergencyContact,
    plateNumber,
    ID: customerID,
  },
}) {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <StyledText>{firstName + " " + lastName}</StyledText>

      <Stacked>
        <span>{email}</span>
        <Number>{phone}</Number>
      </Stacked>

      <StyledText>{address}</StyledText>

      <StyledText>{emergencyContact}</StyledText>

      <StyledText>{plateNumber}</StyledText>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={customerID} />

          <Menus.List id={customerID}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/guest/${customerID}`)}
            >
              See Details
            </Menus.Button>

            <Modal.Open opens="edit-guest">
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Modal.Open>

            <Modal.Window name="edit-guest">
              <CreateGuestForm />
            </Modal.Window>
          </Menus.List>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default GuestRow;

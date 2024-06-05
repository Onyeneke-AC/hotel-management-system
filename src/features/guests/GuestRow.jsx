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

      <HiEllipsisVertical />
      {/* <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />

          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/booking/${bookingId}`)}
            >
              See Details
            </Menus.Button>

            { {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )} }

            { {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                disabled={isCheckingOut}
                onClick={() => {
                  checkout(bookingId);
                }}
              >
                Check out
              </Menus.Button>
            )} }
            { <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete Booking</Menus.Button>
        </Modal.Open>}
          </Menus.List>
        </Menus.Menu>

        { <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="bookings"
            id={bookingId}
            disabled={isDeletingBooking}
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>}
      </Modal> */}
    </Table.Row>
  );
}

export default GuestRow;

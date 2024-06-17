import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import CreateBookingForm from "./CreateBookingForm";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import { useNavigate } from "react-router-dom";
import ConfirmDelete from "../../ui/ConfirmDelete";
import SignupForm from "../authentication/SignupForm";

const Room = styled.div`
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

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const StyledOther = styled.div`
  display: flex;
  justify-content: center;
`;

function BookingRow({ booking }) {
  const {
    roomBookings: { checkedIn, numberOfNights, startDate, endDate },
    amount,
    roomName,
    receptionist,
    bookingID,
    customer: { firstName, email },
  } = booking;

  const navigate = useNavigate();

  const statusToTagName = {
    true: "green",
    false: "silver",
  };

  return (
    <Table.Row>
      <Room>{roomName}</Room>

      <Stacked>
        <span>{firstName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numberOfNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[checkedIn]} marks="mark">
        {/* {checkedIn === true ? <HiOutlineCheck /> : <HiOutlineXMark />}{" "} */}
        <span style={{ fontSize: "1rem" }}>{receptionist}</span>
      </Tag>

      <Amount>{formatCurrency(amount)}</Amount>

      <StyledOther>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={bookingID} />

            <Menus.List id={bookingID}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/booking/${bookingID}`)}
              >
                See Details
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Window name="edit">
                <CreateBookingForm />
              </Modal.Window>
            </Menus.List>
          </Menus.Menu>
        </Modal>
      </StyledOther>
    </Table.Row>
  );
}

export default BookingRow;

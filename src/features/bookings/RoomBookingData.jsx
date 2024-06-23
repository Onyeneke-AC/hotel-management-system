import styled from "styled-components";
import { useRoom } from "../rooms/useRoom";
import SpinnerMini from "../../ui/SpinnerMini";
import { format, isToday, parseISO } from "date-fns";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import {
  HiEye,
  HiOutlineCheck,
  HiOutlineXMark,
  HiPencil,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useGuest } from "../guests/useGuest";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import CreateBookingForm from "./CreateBookingForm";

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

const Room = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const StyledOther = styled.div`
  display: flex;
  justify-content: center;
`;

function RoomBookingData({
  roomBooking,
  receptionist,
  customerID,
  ID,
  booking,
}) {
  const {
    ID: roomBookingId,
    numberOfNights,
    checkedIn,
    // checkedOut,
    startDate,
    endDate,
    amount,
    roomID,
  } = roomBooking;

  const { guest, isLoadingGuest } = useGuest(customerID);
  const { isLoadingRoom, room } = useRoom(roomID);

  const navigate = useNavigate();

  const { firstName, lastName, email } = guest || {};

  const roomData = room && room.length > 0 ? room[0] : null;

  const roomName = roomData?.name || "Unknown Room";

  const statusToTagName = {
    true: "green",
    false: "silver",
  };

  const startDateTime = parseISO(startDate);
  const endDateTime = parseISO(endDate);

  return (
    <>
      <Room>{isLoadingRoom ? <SpinnerMini /> : roomName}</Room>
      <Stacked>
        {isLoadingGuest ? (
          <SpinnerMini />
        ) : (
          <>
            <span>{firstName + " " + lastName}</span>
            <span>{email}</span>
          </>
        )}
      </Stacked>
      <Stacked>
        <span>
          {isToday(new Date(startDateTime))
            ? "Today"
            : formatDistanceFromNow(new Date(startDateTime))}
          &rarr; {numberOfNights} night stay
        </span>
        <span>
          {format(new Date(startDateTime), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDateTime), "MMM dd yyyy")}
        </span>
      </Stacked>{" "}
      <Tag type={statusToTagName[checkedIn]} $marks="mark">
        {checkedIn === true ? <HiOutlineCheck /> : <HiOutlineXMark />}{" "}
        <span style={{ fontSize: "1rem" }}>{receptionist}</span>
      </Tag>
      <Amount>{formatCurrency(amount)}</Amount>
      <StyledOther>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={ID} />

            <Menus.List id={ID}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() => navigate(`/booking/${ID}`)}
              >
                See Details
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateBookingForm
                bookingToEdit={booking}
                roomBookingId={roomBookingId}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </StyledOther>
    </>
  );
}

export default RoomBookingData;

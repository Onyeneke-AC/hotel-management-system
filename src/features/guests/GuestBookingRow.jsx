import styled from "styled-components";
import { useRoom } from "../rooms/useRoom";
import SpinnerMini from "../../ui/SpinnerMini";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import { format, isToday, parseISO } from "date-fns";
import {
  HiEye,
  HiOutlineCheck,
  HiOutlineXMark,
  HiPencil,
} from "react-icons/hi2";
import Tag from "../../ui/Tag";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import CreateBookingForm from "../bookings/CreateBookingForm";
import { useNavigate } from "react-router-dom";
import Table from "../../ui/Table";
import { useUser } from "../users/useUser";

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

function GuestBookingRow({ booking }) {
  const navigate = useNavigate();
  const {
    roomBookings,
    amount,
    isPaid,
    paymentMethod,
    receptionist,
    ID: bookingId,
  } = booking;

  const {
    checkedIn,
    roomID,
    startDate,
    endDate,
    numberOfNights,
    ID: roomBookingId,
  } = roomBookings?.[0] || {};

  const { room, isLoadingRoom } = useRoom(roomID);
  const { isLoadingUser, user } = useUser(receptionist);

  const roomData = room && room.length > 0 ? room[0] : null;

  const roomName = roomData?.name || "Unknown Room";

  const { firstName: first, lastName: last } = user || {};

  const statusToTagName = {
    true: "green",
    false: "silver",
  };

  if (roomBookings === null || roomBookings.length === 0) {
    return <div>"This guest has no previous or current booking"</div>;
  }

  const startDateTime = parseISO(startDate);
  const endDateTime = parseISO(endDate);

  return (
    <Table.Row>
      <Room>{isLoadingRoom ? <SpinnerMini /> : roomName}</Room>
      <Amount>{formatCurrency(amount)}</Amount>
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
      </Stacked>
      <Tag type={statusToTagName[isPaid]} $marks="mark">
        {isPaid === true ? <HiOutlineCheck /> : <HiOutlineXMark />}{" "}
        {isPaid && <span style={{ fontSize: "1rem" }}>{paymentMethod}</span>}
      </Tag>
      <Tag type={statusToTagName[checkedIn]} $marks="mark">
        {checkedIn === true ? <HiOutlineCheck /> : <HiOutlineXMark />}{" "}
        {!isLoadingUser && (
          <span style={{ fontSize: "1rem" }}>
            {first === undefined || last === undefined
              ? " booked by ..."
              : " " + first + " " + last}
          </span>
        )}
      </Tag>
      <StyledOther>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={bookingId} />

            <Menus.List id={bookingId}>
              <Menus.Button
                icon={<HiEye />}
                onClick={() =>
                  navigate(`/booking/${bookingId}/${roomBookingId}`)
                }
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
    </Table.Row>
  );
}

export default GuestBookingRow;

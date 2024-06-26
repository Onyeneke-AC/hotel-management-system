import Table from "../../ui/Table";
import RoomBookingData from "./RoomBookingData";

// import styled from "styled-components";
// import { format, isToday } from "date-fns";

// import Tag from "../../ui/Tag";
// import CreateBookingForm from "./CreateBookingForm";

// import { formatCurrency } from "../../utils/helpers";
// import { formatDistanceFromNow } from "../../utils/helpers";

// import { HiEye, HiPencil } from "react-icons/hi2";
// import Modal from "../../ui/Modal";
// import Menus from "../../ui/Menus";
// import SpinnerMini from "../../ui/SpinnerMini";
// import { useNavigate } from "react-router-dom";
// import { parseISO } from "date-fns";
// import { useGuest } from "../guests/useGuest";

// const Room = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: "Sono";
// `;

// const Stacked = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.2rem;

//   & span:first-child {
//     font-weight: 500;
//   }

//   & span:last-child {
//     color: var(--color-grey-500);
//     font-size: 1.2rem;
//   }
// `;

// const Amount = styled.div`
//   font-family: "Sono";
//   font-weight: 500;
// `;

// const StyledOther = styled.div`
//   display: flex;
//   justify-content: center;
// `;

function BookingRow({ booking }) {
  const { customerID, roomBookings, receptionist, ID } = booking;

  // const { guest, isLoadingGuest } = useGuest(customerID);

  // const navigate = useNavigate();

  // if (isLoadingGuest) return <SpinnerMini />;

  // const { firstName, lastName, email } = guest;

  // const { checkedIn, numberOfNights, startDate, endDate } = roomBooking;

  // const statusToTagName = {
  //   true: "green",
  //   false: "silver",
  // };

  // const startDateTime = parseISO(startDate);
  // const endDateTime = parseISO(endDate);

  return (
    <>
      {/* <Stacked>
        <span>{firstName + " " + lastName}</span>
        <span>{email}</span>
      </Stacked> */}

      {
        roomBookings.map((roomBooking) => (
          <Table.Row key={roomBooking.ID}>
            <RoomBookingData
              roomBooking={roomBooking}
              receptionist={receptionist}
              customerID={customerID}
              ID={ID}
              booking={booking}
            />
          </Table.Row>
        ))
        /*<Room>{roomName}</Room>

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
      </Stacked> */
      }

      {/* <Tag type={statusToTagName[checkedIn]} marks="mark">
        {/* {checkedIn === true ? <HiOutlineCheck /> : <HiOutlineXMark />}{" "} }
        <span style={{ fontSize: "1rem" }}>{receptionist}</span>
      </Tag>

      <Amount>{formatCurrency(amount)}</Amount>*/}

      {/* <StyledOther>
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
              <CreateBookingForm />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </StyledOther> */}
    </>
  );
}

export default BookingRow;

import styled from "styled-components";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
// import { useBooking } from "./useBooking";
// import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
// import { useCheckout } from "../check-in-out/useCheckout";
import { HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
// import { useDeleteBooking } from "./useDeleteBooking";
// import Empty from "../../ui/Empty";
import BookingDataBox from "./BookingDataBox";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const booking = {
  customerID: 1,
  receptionist: "Anna",
  amount: 1000,
  isPaid: false,
  paymentMethod: "Card Transfer",
  isComplementary: false,
  created_at: "2024-06-16T00:00:00",
  roomBookings: {
    numberOfNights: 4,
    checkedIn: false,
    checkedOut: true,
    startDate: "2024-06-16T00:00:00",
    endDate: "2024-06-20T00:00:00",
    bookingId: 1,
    roomId: 10,
  },
};

function GuestDetail() {
  //   const { booking, isLoading } = useBooking();
  //   const { deleteBooking, isDeletingBooking } = useDeleteBooking();
  //   const { checkout, isCheckingOut } = useCheckout();
  const navigate = useNavigate();

  const moveBack = useMoveBack();

  //   if (isLoading) return <Spinner />;
  //   if (!booking) return <Empty resourceName="booking" />;

  const {
    id: bookingId,
    receptionist,
    roomBookings: { checkedIn, checkedOut },
  } = booking;

  const statusToTagName = {
    true: "green",
    false: "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #booking id</Heading>
          <Tag type={statusToTagName[checkedIn]} marks="mark">
            {/* {checkedIn === true ? <HiOutlineCheck /> : <HiOutlineXMark />}{" "} */}
            {checkedIn === true ? (
              <span style={{ fontSize: "1rem" }}>
                checked in by {receptionist}
              </span>
            ) : (
              <span style={{ fontSize: "1rem" }}>
                checked out by {receptionist}
              </span>
            )}
          </Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {checkedIn === true && (
          <Button
            icon={<HiArrowUpOnSquare />}
            // disabled={isCheckingOut}
            // onClick={() => {
            //   checkout(bookingId);
            // }}
          >
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger" icon={<HiTrash />}>
              Delete Booking
            </Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="bookings"
              id={bookingId}
              //   disabled={isDeletingBooking}
              //   onConfirm={() =>
              //     deleteBooking(bookingId, {
              //       onSettled: () => navigate(-1),
              //     })
              //   }
            />
          </Modal.Window>
        </Modal>

        {checkedOut === true && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default GuestDetail;

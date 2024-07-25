import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Empty from "../../ui/Empty";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import { useRoomBooking } from "./useRoomBooking";
import { useDeleteBooking } from "./useDeleteBooking";
import { useCheckout } from "./useCheckout";
import { useCheckin } from "./useCheckin";

import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiOutlineCheck,
  HiOutlineXMark,
  HiTrash,
} from "react-icons/hi2";
import { useUserDetails } from "../../context/UserDetailsContext";
import { useUser } from "../users/useUser";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { userDetails } = useUserDetails();

  const { roomBookingId } = useParams();

  const { isAdmin, role } = userDetails;

  const { booking, isLoading } = useBooking();
  const { receptionist, ID: bookingId } = booking || {};

  const { roomBooking, isLoadingRoomBooking } = useRoomBooking();
  const { deleteBooking, isDeletingBooking } = useDeleteBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { checkin, isCheckingIn } = useCheckin();
  const { isLoadingUser, user } = useUser(receptionist);

  const navigate = useNavigate();

  const moveBack = useMoveBack();

  if (isLoading || isLoadingRoomBooking) return <Spinner />;

  const { checkedIn, checkedOut } = roomBooking || {};

  const { firstName: first, lastName: last } = user || {};

  if (!booking) return <Empty resourceName="booking" />;

  const statusToTagName = {
    true: "green",
    false: "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[checkedIn]} marks="mark">
            {checkedIn === true ? <HiOutlineCheck /> : <HiOutlineXMark />}{" "}
            {!isLoadingUser && checkedIn === true ? (
              <span style={{ fontSize: "1rem" }}>
                checked in by{" "}
                {first === undefined || last === undefined
                  ? "..."
                  : " " + first + " " + last}
              </span>
            ) : (
              <span style={{ fontSize: "1rem" }}>
                checked out by{" "}
                {first === undefined || last === undefined
                  ? "..."
                  : " " + first + " " + last}
              </span>
            )}
          </Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} roomBooking={roomBooking} />

      <ButtonGroup>
        {checkedIn === true && checkedOut === false && (
          <Button
            icon={<HiArrowUpOnSquare />}
            disabled={isCheckingOut}
            onClick={() => {
              checkout(roomBookingId);
            }}
          >
            Check out
          </Button>
        )}
        {isAdmin && role.toLowerCase() === "owner" && (
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
                disabled={isDeletingBooking}
                onConfirm={() =>
                  deleteBooking(bookingId, {
                    onSettled: () => navigate(-1),
                  })
                }
              />
            </Modal.Window>
          </Modal>
        )}

        {checkedOut === false && checkedIn === false && (
          <Button
            icon={<HiArrowDownOnSquare />}
            onClick={() => checkin(roomBookingId)}
            disabled={isCheckingIn}
          >
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

export default BookingDetail;

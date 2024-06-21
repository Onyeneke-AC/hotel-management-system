import styled from "styled-components";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useGuest } from "./useGuest";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";

import CreateBookingForm from "../bookings/CreateBookingForm";
import GuestDataBox from "./GuestDataBox";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

// const booking = {
//   customerID: 1,
//   receptionist: "Anna",
//   amount: 1000,
//   isPaid: false,
//   paymentMethod: "Card Transfer",
//   isComplementary: false,
//   created_at: "2024-06-16T00:00:00",
//   roomBookings: {
//     numberOfNights: 4,
//     checkedIn: false,
//     checkedOut: true,
//     startDate: "2024-06-16T00:00:00",
//     endDate: "2024-06-20T00:00:00",
//     bookingId: 1,
//     roomId: 10,
//   },
// };

function GuestDetail() {
  const { guest, isLoadingGuest } = useGuest();

  const moveBack = useMoveBack();

  if (isLoadingGuest) return <Spinner />;

  const { ID: customerID, bookings } = guest;

  // const statusToTagName = {
  //   true: "green",
  //   false: "silver",
  // };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Guest #{customerID}</Heading>
        </HeadingGroup>

        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <GuestDataBox guest={guest} />

      <ButtonGroup>
        <Modal>
          <Modal.Open opens="add-booking">
            <Button>Add to Bookings</Button>
          </Modal.Open>

          <Modal.Window name="add-booking">
            <CreateBookingForm />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>

      {/*Populate the bookings of the guest here*/}
    </>
  );
}

export default GuestDetail;

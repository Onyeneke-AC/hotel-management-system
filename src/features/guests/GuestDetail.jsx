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
import GuestBookingsTable from "./GuestBookingsTable";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function GuestDetail() {
  const { guest, isLoadingGuest } = useGuest();

  const moveBack = useMoveBack();

  if (isLoadingGuest) return <Spinner />;

  const { ID: customerID } = guest;

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

      <GuestBookingsTable />
    </>
  );
}

export default GuestDetail;

import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";

const BookingHeader = styled.div`
  margin-bottom: 20px;
`;

function CreateBookingForm({ onCloseModal }) {
  return (
    <>
      <BookingHeader>
        <Heading as="h1">Create New Booking</Heading>
      </BookingHeader>
      <Form type={onCloseModal ? "modal" : "regular"}>
        <FormRow label="First Name">
          <Input type="text" id="firstName" />
        </FormRow>

        <FormRow label="Email">
          <Input type="text" id="email" />
        </FormRow>

        <FormRow label="Amount">
          <Input type="number" id="amount" />
        </FormRow>

        <FormRow label="Room Name">
          <Input type="text" id="roomNumber" />
        </FormRow>

        <FormRow label="Start Date">
          <Input type="text" id="startDate" />
        </FormRow>

        <FormRow label="End Date">
          <Input type="number" id="endDate" />
        </FormRow>

        <FormRow>
          <Button
            type="reset"
            variation="secondary"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button>Add New Booking</Button>
        </FormRow>
      </Form>
    </>
  );
}

export default CreateBookingForm;

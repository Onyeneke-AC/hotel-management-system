import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const BookingHeader = styled.div`
  margin-bottom: 30px;
`;

function CreateBookingForm({ onCloseModal }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

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

        <FormRow label="Start Date" type="date">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="custom_date"
            minDate={today}
          />
        </FormRow>

        <FormRow label="End Date" type="date">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="custom_date"
            minDate={tomorrow}
          />
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

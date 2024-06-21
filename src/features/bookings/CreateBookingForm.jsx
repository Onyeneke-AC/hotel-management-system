import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import Checkbox from "../../ui/Checkbox";

const BookingHeader = styled.div`
  margin-bottom: 30px;
`;

const receptionist = "dummy receptionist";

function CreateBookingForm({ onCloseModal }) {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const { register, control } = useForm();

  return (
    <>
      <BookingHeader>
        <Heading as="h1">Create New Booking</Heading>
      </BookingHeader>
      <Form type={onCloseModal ? "modal" : "regular"}>
        <FormRow label="Receptionist">
          <Input
            type="text"
            id="receptionist"
            value={receptionist}
            disabled
            {...register("receptionist")}
          />
        </FormRow>

        <FormRow label="Room Name">
          <Input type="text" id="roomName" />
        </FormRow>

        <FormRow label="roomAmount">
          <Input type="number" id="roomAmount" />
        </FormRow>

        <FormRow label="paymentMethod">
          <Input type="text" id="paymentMethod" />
        </FormRow>

        <FormRow label="Start Date" type="date">
          <Controller
            name="startDate"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                placeholderText="Select a start date"
                minDate={today}
                id="startDate"
                className="custom_date"
              />
            )}
          />
        </FormRow>

        <FormRow label="End Date" type="date">
          <Controller
            name="endDate"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                placeholderText="Select an end date"
                minDate={tomorrow}
                id="endDate"
                className="custom_date"
              />
            )}
          />
        </FormRow>

        <FormRow type="check">
          <Checkbox id="isPaid" {...register("isPaid")}>
            Guest has paid
          </Checkbox>
          <Checkbox id="checkedIn" {...register("checkedIn")}>
            Check In (only after payment)
          </Checkbox>
          <Checkbox id="isComplemetary" {...register("isComplementary")}>
            Complementary
          </Checkbox>
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

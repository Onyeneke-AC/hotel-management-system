import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { createRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import Checkbox from "../../ui/Checkbox";
import Select from "../../ui/Select";
import { useRooms } from "../rooms/useRooms";
import { useParams } from "react-router-dom";
import { useCreateBooking } from "./useCreateBooking";
import { useEditBooking } from "./useEditBooking";
// import { useRoom } from "../rooms/useRoom";

const BookingHeader = styled.div`
  margin-bottom: 30px;
`;

const receptionist = 2;

const paymentOptions = [
  {
    value: "Credit Card",
    label: "Credit Card",
  },
  {
    value: "Transfer",
    label: "Transfer",
  },
  {
    value: "Cash",
    label: "Cash",
  },
];

function CreateBookingForm({
  bookingToEdit = {},
  roomBookingId,
  onCloseModal,
}) {
  const {
    ID: updateId,
    roomBookings,
    isPaid: isPaidDefault,
    paymentMethod,
    isComplementary: isComplemetaryDefault,
    ...updateValues
  } = bookingToEdit;

  const isUpdateSession = Boolean(updateId);

  const roomBookingsArray = roomBookings || [];

  const selectedBooking =
    roomBookingsArray.find((roomBooking) => roomBooking.ID === roomBookingId) ||
    {};

  const { guestId } = useParams();

  const roomNameRef = createRef();
  const isPaidRef = createRef();
  const checkedInRef = createRef();
  const isComplementaryRef = createRef();

  // const { room } = useRoom("");
  const { rooms, isLoadingRooms } = useRooms();
  const { createBooking, isCreating } = useCreateBooking();
  const { updateBooking, isUpdatingBooking } = useEditBooking();

  const [roomName, setRoomName] = useState("17");
  const [isPaid, setIsPaid] = useState(isPaidDefault);
  const [checkedIn, setCheckedIn] = useState(
    selectedBooking?.checkedIn || false
  );
  const [isComplementary, setIsComplementary] = useState(isComplemetaryDefault);

  const isWorking = isCreating || isUpdatingBooking;

  const roomsArray = rooms || [];

  // const ID = roomsArray.length > 0 ? roomsArray.ID : "";

  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const { register, control, watch, reset, handleSubmit, formState } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });

  const { errors } = formState;

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  const selectedRoom = roomsArray.find((room) => room.name === roomName) || {};

  const roomPrice = selectedRoom?.price || 0;
  const roomID = selectedRoom?.ID || 0;

  function onSubmit(data) {
    const { startDate, endDate, paymentMethod } = data;

    const mainData = {
      customerID: parseInt(guestId),
      receptionist,
      isPaid,
      paymentMethod,
      isComplementary,
      roomBookings: [{ checkedIn, startDate, endDate, roomName, roomID }],
    };

    if (isUpdateSession) {
      updateBooking(
        { newBookingData: mainData, id: updateId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createBooking(mainData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  return (
    <>
      <BookingHeader>
        <Heading as="h1">
          {isUpdateSession ? "Edit Booking Details" : "Create New Booking"}
        </Heading>
      </BookingHeader>
      <Form
        type={onCloseModal ? "modal" : "regular"}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <Select
            ref={roomNameRef}
            id="roomName"
            options={roomsArray}
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            disabled={isLoadingRooms || isWorking}
            special={true}
          />
        </FormRow>

        <FormRow label="roomAmount">
          <Input type="number" id="roomAmount" value={roomPrice} disabled />
        </FormRow>

        <FormRow label="paymentMethod" error={errors?.paymentMethod?.message}>
          <Select
            id="paymentMethod"
            options={paymentOptions}
            disabled={isWorking}
            {...register("paymentMethod")}
          />
        </FormRow>

        <FormRow
          label="Start Date"
          type="date"
          error={errors?.startDate?.message}
        >
          <Controller
            name="startDate"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <DatePicker
                selected={
                  field.value ||
                  (isUpdateSession &&
                    new Date(selectedBooking && selectedBooking.startDate))
                }
                onChange={(date) => field.onChange(date)}
                placeholderText="Select a start date"
                minDate={today}
                maxDate={endDate ? new Date(endDate - 1) : null}
                disabled={isWorking}
                id="startDate"
                className="custom_date"
              />
            )}
          />
        </FormRow>

        <FormRow label="End Date" type="date" error={errors?.endDate?.message}>
          <Controller
            name="endDate"
            control={control}
            rules={{
              required: "This field is required",
              validate: (value) => {
                const start = new Date(startDate);
                const end = new Date(value);
                return end > start;
              },
            }}
            render={({ field }) => (
              <DatePicker
                selected={
                  field.value ||
                  (isUpdateSession &&
                    new Date(selectedBooking && selectedBooking.endDate))
                }
                onChange={(date) => field.onChange(date)}
                placeholderText="Select an end date"
                minDate={startDate ? new Date(startDate) : tomorrow}
                disabled={isWorking}
                id="endDate"
                className="custom_date"
              />
            )}
          />
        </FormRow>

        <FormRow type="check">
          <Checkbox
            id="isPaid"
            ref={isPaidRef}
            checked={isPaid}
            disabled={isWorking}
            onChange={() => setIsPaid(!isPaid)}
          >
            Guest has paid
          </Checkbox>
          <Checkbox
            id="checkedIn"
            ref={checkedInRef}
            checked={checkedIn}
            disabled={isWorking}
            onChange={() => setCheckedIn(!checkedIn)}
          >
            Check In (only after payment)
          </Checkbox>
          <Checkbox
            id="isComplemetary"
            ref={isComplementaryRef}
            checked={isComplementary}
            disabled={isWorking}
            onChange={() => setIsComplementary(!isComplementary)}
          >
            Complementary Guest
          </Checkbox>
        </FormRow>

        <FormRow>
          <Button
            type="reset"
            variation="secondary"
            onClick={reset}
            disabled={isWorking}
            onClickCapture={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isWorking}>
            {isUpdateSession ? "Update Booking Details" : "Add New Booking"}
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default CreateBookingForm;

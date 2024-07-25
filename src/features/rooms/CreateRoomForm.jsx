import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import Select from "../../ui/Select";
import { useForm } from "react-hook-form";
import { useCreateRoom } from "./useCreateRoom";
import { useUpdateRoom } from "./useUpdateRoom";
import { useUserDetails } from "../../context/UserDetailsContext";

const RoomHeader = styled.div`
  margin-bottom: 30px;
`;

const statusOptions = [
  {
    value: "available",
    label: "Available",
  },
  {
    value: "cleaning",
    label: "Cleaning",
  },
  {
    value: "Unavailable",
    label: "Unavailable",
  },
];

function CreateRoomForm({ roomToEdit = {}, onCloseModal }) {
  const { userDetails } = useUserDetails();

  const { isAdmin } = userDetails;

  const { createRoom, isCreatingRoom } = useCreateRoom();
  const { updateRoom, isUpdatingRoom } = useUpdateRoom();

  const isWorking = isCreatingRoom || isUpdatingRoom;

  const { ID: updateId, ...updateValues } = roomToEdit;

  const isUpdateSession = Boolean(updateId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const { roomBookings, price, ...otherData } = data;
    const priceInteger = parseInt(price);
    const mainData = { ...otherData, price: priceInteger };

    if (isUpdateSession) {
      updateRoom(
        { newRoomData: mainData, id: updateId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createRoom(mainData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  return (
    <>
      <RoomHeader>
        <Heading as="h1">
          {isUpdateSession ? "Edit Room Details" : "Create New Room"}
        </Heading>
      </RoomHeader>

      <Form
        type={onCloseModal ? "modal" : "regular"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow label="Room Name" error={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            disabled={isWorking || !isAdmin}
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Category" error={errors?.category?.message}>
          <Input
            type="text"
            id="category"
            disabled={isWorking || !isAdmin}
            {...register("category", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Price" error={errors?.price?.message}>
          <Input
            type="number"
            id="price"
            disabled={isWorking || !isAdmin}
            {...register("price", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Description" error={errors?.description?.message}>
          <Textarea
            type="text"
            id="description"
            disabled={isWorking || !isAdmin}
            {...register("description", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Status">
          <Select
            id="status"
            disabled={isWorking}
            options={statusOptions}
            {...register("status")}
          />
        </FormRow>

        <FormRow>
          <Button
            type="reset"
            variation="secondary"
            disabled={isWorking}
            onClick={reset}
            onClickCapture={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isWorking} type="submit">
            {isUpdateSession ? "Update Room Details" : "Add New Room"}
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default CreateRoomForm;

import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import { useCreateGuest } from "./useCreateGuest";
import { useUpdateGuest } from "./useUpdateGuest";
import { useNavigate } from "react-router-dom";

const GuestHeader = styled.div`
  margin-bottom: 30px;
`;

function CreateGuestForm({ guestToEdit = {}, onCloseModal }) {
  const { createGuest, isCreatingGuest } = useCreateGuest();
  const { updateGuest, isUpdatingGuest } = useUpdateGuest();
  const navigate = useNavigate();

  const isWorking = isCreatingGuest || isUpdatingGuest;

  const { ID: updateId, ...updateValues } = guestToEdit;

  const isUpdateSession = Boolean(updateId);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const { bookings, ...mainData } = data;

    if (isUpdateSession) {
      updateGuest(
        { newGuestData: mainData, id: updateId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      createGuest(mainData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
          navigate("/guests");
        },
      });
    }
  }

  return (
    <>
      <GuestHeader>
        <Heading as="h1">
          {isUpdateSession ? "Edit Guest Details" : "Create New Guest"}
        </Heading>
      </GuestHeader>

      <Form
        type={onCloseModal ? "modal" : "regular"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormRow label="First Name" error={errors?.firstName?.message}>
          <Input
            type="text"
            id="firstName"
            disabled={isWorking}
            {...register("firstName", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Last Name" error={errors?.lastName?.message}>
          <Input
            type="text"
            id="lastName"
            disabled={isWorking}
            {...register("lastName", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Email" error={errors?.email?.message}>
          <Input
            type="text"
            id="email"
            disabled={isWorking}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow label="Phone" error={errors?.phone?.message}>
          <Input
            type="tel"
            id="phone"
            disabled={isWorking}
            {...register("phone", {
              required: "This field is required",
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
        </FormRow>

        <FormRow label="Address" error={errors?.address?.message}>
          <Input
            type="text"
            id="address"
            disabled={isWorking}
            {...register("address", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow
          label="Emergency Contact"
          error={errors?.emergencyContact?.message}
        >
          <Input
            type="tel"
            id="emergencyContact"
            disabled={isWorking}
            {...register("emergencyContact", {
              required: "This field is required",
              pattern: {
                value: /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,7}$/,
                message: "Please enter a valid phone number",
              },
            })}
          />
        </FormRow>

        <FormRow label="Plate Number" error={errors?.plateNumber?.message}>
          <Input
            type="text"
            id="plateNumber"
            disabled={isWorking}
            {...register("plateNumber", {
              required: "This field is required",
            })}
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
            {isUpdateSession ? "Update Guest Details" : "Add New Guest"}
          </Button>
        </FormRow>
      </Form>
    </>
  );
}

export default CreateGuestForm;

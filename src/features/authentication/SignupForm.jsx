import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import ButtonGroup from "../../ui/ButtonGroup";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { useState } from "react";
import { useUpdateUser } from "../users/useUpdateUser";

const SignupHeader = styled.div`
  margin-bottom: 30px;
`;

function SignupForm({ userToEdit = {}, onCloseModal }) {
  const { signup, isCreating } = useSignup();
  const { updateUser, isUpdating } = useUpdateUser();
  const [userAdmin, setUserAdmin] = useState(false);

  const isWorking = isCreating || isUpdating;

  const { ID: updateId, ...updateValues } = userToEdit;

  const isUpdateSession = Boolean(updateId);

  const { register, getValues, handleSubmit, formState, reset } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    const { passwordConfirm, salary, bookings, ...otherData } = data;

    const transSalary = parseInt(salary);

    const mainData = { ...otherData, isAdmin: userAdmin, salary: transSalary };

    if (isUpdateSession) {
      updateUser(
        { newUserData: mainData, id: updateId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      signup(mainData, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      });
    }
  }

  return (
    <>
      <SignupHeader>
        <Heading as="h1">
          {isUpdateSession ? "Edit User Details" : "Create New User"}
        </Heading>
      </SignupHeader>

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

        <FormRow label="Email Address" error={errors?.email?.message}>
          <Input
            type="email"
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

        <FormRow label="Phone Number" error={errors?.phone?.message}>
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

        <FormRow label="Role" error={errors?.role?.message}>
          <Input
            type="text"
            id="role"
            disabled={isWorking}
            {...register("role", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Salary" error={errors?.salary?.message}>
          <Input
            type="number"
            id="salary"
            step="1"
            disabled={isWorking}
            {...register("salary", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow
          label="Password (min 8 characters)"
          error={errors?.password?.message}
        >
          <Input
            type="password"
            id="password"
            disabled={isWorking}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Repeat Password"
          error={errors?.passwordConfirm?.message}
        >
          <Input
            type="password"
            id="passwordConfirm"
            disabled={isWorking}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords do not match",
            })}
          />
        </FormRow>

        <FormRow type="check">
          <Checkbox
            id="is_admin"
            checked={userAdmin}
            onChange={() => setUserAdmin((admin) => !admin)}
            disabled={isWorking}
          >
            Check the box if new user is an Admin
          </Checkbox>
        </FormRow>
        <FormRow>
          <ButtonGroup>
            <Button
              variation="secondary"
              type="reset"
              onClick={reset}
              disabled={isWorking}
              onClickCapture={() => onCloseModal?.()}
            >
              Cancel
            </Button>
            <Button disabled={isWorking}>
              {isUpdateSession ? "Update User Details" : "Create New User"}
            </Button>
          </ButtonGroup>
        </FormRow>
      </Form>
    </>
  );
}

export default SignupForm;

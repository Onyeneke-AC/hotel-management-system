import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useEditUserPassword } from "../users/useEditUser";
import { useUserDetails } from "../../context/UserDetailsContext";

function EditPasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { userDetails } = useUserDetails();

  const { ID: userId } = userDetails;

  const { editUserPassword, isUpdatingPassword } = useEditUserPassword();

  function onSubmit(data) {
    const { password, confirmPassword } = data;

    const mainData = { password, confirmPassword };

    editUserPassword(
      { passwordData: mainData, id: userId },
      {
        onSuccess: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New Password (min 8 chars)"
        error={errors?.password?.message}
      >
        <Input
          type="text"
          id="password"
          placeholder="Fill in the new password"
          autoComplete="current-password"
          disabled={isUpdatingPassword}
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
        label="Confirm password"
        error={errors?.confirmPassword?.message}
      >
        <Input
          type="text"
          autoComplete="confirm-password"
          placeholder="Confirm new password"
          id="confirmPassword"
          disabled={isUpdatingPassword}
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button
          onClick={reset}
          type="reset"
          variation="secondary"
          disabled={isUpdatingPassword}
        >
          Cancel
        </Button>
        <Button disabled={isUpdatingPassword}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default EditPasswordForm;

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function SignupForm() {
  return (
    <Form>
      <FormRow label="Full name">
        <Input type="text" id="fullName" />
      </FormRow>

      <FormRow label="Email Address">
        <Input type="email" id="email" />
      </FormRow>

      <FormRow label="Password (min 8 characters)">
        <Input type="password" id="password" />
      </FormRow>

      <FormRow label="Repeat Password">
        <Input type="password" id="passwordConfirm" />
      </FormRow>
    </Form>
  );
}

export default SignupForm;

import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import ButtonGroup from "../../ui/ButtonGroup";

const SignupHeader = styled.div`
  margin-bottom: 30px;
`;

function SignupForm({ onCloseModal }) {
  return (
    <>
      <SignupHeader>
        <Heading as="h1">Create New User</Heading>
      </SignupHeader>
      <Form type={onCloseModal ? "modal" : "regular"}>
        <FormRow label="Full name">
          <Input type="text" id="fullName" />
        </FormRow>

        <FormRow label="Email Address">
          <Input type="email" id="email" />
        </FormRow>

        <FormRow label="Phone Number">
          <Input type="text" id="phone" />
        </FormRow>

        <FormRow label="Role">
          <Input type="text" id="role" />
        </FormRow>

        <FormRow label="Salary">
          <Input type="number" id="salary" />
        </FormRow>

        <FormRow label="Password (min 8 characters)">
          <Input type="password" id="password" />
        </FormRow>

        <FormRow label="Repeat Password">
          <Input type="password" id="passwordConfirm" />
        </FormRow>

        <FormRow type="check">
          <Checkbox id="admin">Check the box if new user is an Admin</Checkbox>
          <ButtonGroup>
            <Button variation="secondary" type="reset">
              Cancel
            </Button>
            <Button>Create new user</Button>
          </ButtonGroup>
        </FormRow>
      </Form>
    </>
  );
}

export default SignupForm;

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUserDetails } from "../../context/UserDetailsContext";

function EditUserDataForm() {
  const { userDetails } = useUserDetails();

  const {
    firstName,
    lastName,
    phone,
    emergencyContact,
    email,
    role,
    employeeID,
  } = userDetails;

  const fullName = firstName + " " + lastName;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Employee ID">
        <Input value={employeeID} id="employeeID" disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input value={fullName} id="fullName" disabled />
      </FormRow>
      <FormRow label="Email address">
        <Input value={email} id="email" disabled />
      </FormRow>
      <FormRow label="Phone">
        <Input value={phone} id="phone" disabled />
      </FormRow>
      <FormRow label="Emergency Contact">
        <Input value={emergencyContact} id="emergencyContact" disabled />
      </FormRow>
      <FormRow label="Role">
        <Input value={role} id="role" disabled />
      </FormRow>
    </Form>
  );
}

export default EditUserDataForm;

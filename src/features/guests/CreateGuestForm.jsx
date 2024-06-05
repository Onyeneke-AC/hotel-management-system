import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function CreateGuestForm({ onCloseModal }) {
  return (
    <Form type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Name">
        <Input type="text" id="name" />
      </FormRow>

      {/* <FormRow label="Last Name">
        <Input type="text" id="lastName" />
      </FormRow> */}

      <FormRow label="Email">
        <Input type="text" id="email" />
      </FormRow>

      <FormRow label="Phone">
        <Input type="number" id="phone" />
      </FormRow>

      <FormRow label="Address">
        <Input type="text" id="address" />
      </FormRow>

      <FormRow label="Emergency Contact">
        <Input type="text" id="emergencyContact" />
      </FormRow>

      <FormRow label="Plate Number">
        <Input type="number" id="plateNumber" />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>Add New Guest</Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;

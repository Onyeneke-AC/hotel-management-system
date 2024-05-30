import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function CreateBookingForm({ onCloseModal }) {
  return (
    <Form type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="First Name">
        <Input type="text" id="firstName" />
      </FormRow>

      <FormRow label="Email">
        <Input type="text" id="email" />
      </FormRow>

      <FormRow label="Amount">
        <Input type="number" id="amount" />
      </FormRow>

      <FormRow label="Room Number">
        <Input type="text" id="roomNumber" />
      </FormRow>

      <FormRow label="Start Date">
        <Input type="text" id="startDate" />
      </FormRow>

      <FormRow label="Number of Nights">
        <Input type="number" id="numNights" />
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
  );
}

export default CreateBookingForm;

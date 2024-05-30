import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function CreateRoomForm() {
  return (
    <Form>
      <FormRow label="Room Name">
        <Input type="text" id="name" />
      </FormRow>

      <FormRow label="Category">
        <Input type="text" id="category" />
      </FormRow>

      <FormRow label="Description">
        <Input type="text" id="description" />
      </FormRow>

      <FormRow label="Price">
        <Input type="number" id="price" />
      </FormRow>

      <FormRow label="Room Name">
        <Input type="text" id="name" />
      </FormRow>
    </Form>
  );
}

export default CreateRoomForm;

import styled from "styled-components";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";

const RoomHeader = styled.div`
  margin-bottom: 30px;
`;

function CreateRoomForm({ onCloseModal }) {
  return (
    <>
      <RoomHeader>
        <Heading as="h1">Create New Room</Heading>
      </RoomHeader>
      <Form type={onCloseModal ? "modal" : "regular"}>
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

        <FormRow>
          <Button
            type="reset"
            variation="secondary"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button>Add New Room</Button>
        </FormRow>
      </Form>
    </>
  );
}

export default CreateRoomForm;

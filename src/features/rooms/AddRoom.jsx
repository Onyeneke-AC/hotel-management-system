import Modal from "../../ui/Modal";
import CreateRoomForm from "./CreateRoomForm";
import Button from "../../ui/Button";

function AddRoom() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="room-form">
          <Button>Add New Room</Button>
        </Modal.Open>
        <Modal.Window name="room-form">
          <CreateRoomForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddRoom;

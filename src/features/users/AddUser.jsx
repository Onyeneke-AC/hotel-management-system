import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import SignupForm from "../authentication/SignupForm";

function AddUser() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="user-form">
          <Button>Add New User</Button>
        </Modal.Open>
        <Modal.Window name="user-form">
          <SignupForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddUser;

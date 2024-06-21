import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateGuestForm from "../guests/CreateGuestForm";
import { HiPlus } from "react-icons/hi2";

function AddBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="booking-form">
          <Button size="small">
            <HiPlus />
          </Button>
        </Modal.Open>
        <Modal.Window name="booking-form">
          <CreateGuestForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBooking;

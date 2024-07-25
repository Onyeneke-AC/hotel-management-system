import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { HiMiniArrowUpTray } from "react-icons/hi2";
import ExportBooking from "./ExportBooking";

function ExportHeader() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="export-form">
          <Button size="small">
            <HiMiniArrowUpTray />
          </Button>
        </Modal.Open>
        <Modal.Window name="export-form">
          <ExportBooking />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ExportHeader;

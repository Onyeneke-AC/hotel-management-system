import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledCheckoutModal = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function CheckoutModal({ onConfirm, disabled, onCloseModal, id }) {
  return (
    <StyledCheckoutModal>
      <Heading as="h3">Check Out Booking {id}</Heading>
      <p>
        Are you sure you want to permanently check out this booking? This action
        cannot be undone.
      </p>
      <div>
        <Button
          onClick={onCloseModal}
          variation="secondary"
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button onClick={onConfirm} variation="danger" disabled={disabled}>
          Check Out
        </Button>
      </div>
    </StyledCheckoutModal>
  );
}

export default CheckoutModal;

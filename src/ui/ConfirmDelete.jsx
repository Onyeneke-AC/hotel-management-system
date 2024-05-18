import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledConfirmDelete = styled.div`
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

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
  id,
}) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to permanently delete this {resourceName} with the
        id #{id}? This action cannot be undone.
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
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;

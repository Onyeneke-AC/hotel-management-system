import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  ${(props) =>
    props.type === "horizontal" &&
    css`
      display: grid;
      align-items: center;
      grid-template-columns: 24rem 1fr 1.2fr;
      gap: 2.4rem;

      padding: 1.2rem;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
      }

      &:has(button) {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
      }
    `};

  ${(props) =>
    props.type === "vertical" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      padding: 1.2rem 0;
    `};

  ${(props) =>
    props.type === "check" &&
    css`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 7rem;

      padding: 2rem 1.5rem 1.5rem;
    `};

  ${(props) =>
    props.type === "date" &&
    css`
      display: grid;
      align-items: center;
      grid-template-columns: 24rem 1fr 1.2fr;
      gap: 2.4rem;

      padding: 1.2rem;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
      }
    `};
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function ExportRowLayout({ label, error, children, type }) {
  return (
    <StyledFormRow type={type}>
      {label && <Label>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

StyledFormRow.defaultProps = {
  type: "horizontal",
};

export default ExportRowLayout;

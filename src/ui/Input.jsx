import styled, { css } from "styled-components";

const Input = styled.input`
  ${(props) =>
    props.type === "regular" &&
    css`
      border-radius: var(--border-radius-sm);
    `};
  ${(props) =>
    props.type === "search" &&
    css`
      border-radius: var(--border-radius-xl);
    `};
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

export default Input;

import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }

  ${(props) =>
    props.type === "submit filterGlass" &&
    css`
      background-color: var(--color-grey-100);
      border-radius: var(--border-radius-xl);

      &:focus {
        border: none;
      }

      & svg {
        color: var(--color-grey-300);
      }
    `}
`;

export default ButtonIcon;

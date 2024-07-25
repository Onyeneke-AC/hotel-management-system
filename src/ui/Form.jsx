import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `};

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
      max-height: 500px;
      overflow-y: auto;
    `};

  ${(props) =>
    props.type === "exportModal" &&
    css`
      width: 60rem;
      max-height: 500px;
      overflow-y: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;
    `};

  /* overflow: scroll; */
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;

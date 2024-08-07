import { forwardRef } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

const Select = forwardRef(
  (
    {
      value,
      options,
      onChange,
      id,
      disabled,
      special = false,
      selected,
      ...props
    },
    ref
  ) => {
    return (
      <StyledSelect
        ref={ref}
        value={value}
        onChange={onChange}
        disabled={disabled}
        id={id}
        selected={selected}
        {...props}
      >
        {options.map((option) => (
          <option value={option.value} key={special ? option.ID : option.value}>
            {special ? option.name : option.label}
          </option>
        ))}
      </StyledSelect>
    );
  }
);

export default Select;

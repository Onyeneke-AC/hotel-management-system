import DatePicker from "react-datepicker";
import Form from "../../ui/Form";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { useState } from "react";

const DateFilterForm = styled.form`
  padding: 10px 0;
`;

const Fieldset = styled.fieldset`
  padding: 1rem 1.5rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Legend = styled.legend`
  color: var(--color-grey-500);
  text-transform: uppercase;
`;

function DashboardBookingTableFilter() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <DateFilterForm>
      <Fieldset>
        <Legend>
          <Heading as="h5">Filter Booking Date</Heading>
        </Legend>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="filter_date"
        />{" "}
        -{" "}
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          className="filter_date"
        />
      </Fieldset>
    </DateFilterForm>
  );
}

export default DashboardBookingTableFilter;

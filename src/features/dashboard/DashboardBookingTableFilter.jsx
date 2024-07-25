import DatePicker from "react-datepicker";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { useDateFilterBookings } from "../../context/DateFilterBookings";
import { format } from "date-fns";

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

let today = new Date();
let tomorrow = new Date(today);
let yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
tomorrow.setDate(tomorrow.getDate() + 1);

function DashboardBookingTableFilter() {
  const { startDate, endDate, setStartDate, setEndDate } =
    useDateFilterBookings();

  function handleSubmit(e) {
    e.preventDefault();

    setStartDate(format(yesterday, "yyyy-MM-dd"));
    setEndDate(format(tomorrow, "yyyy-MM-dd"));
  }

  return (
    <DateFilterForm onSubmit={handleSubmit}>
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
        <ButtonIcon type="submit filterGlass">
          <HiArrowUturnLeft />
        </ButtonIcon>
      </Fieldset>
    </DateFilterForm>
  );
}

export default DashboardBookingTableFilter;

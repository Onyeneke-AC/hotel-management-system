import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  //   HiOutlineChatBubbleBottomCenterText,
  //   HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";

import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";
import { useRoom } from "../rooms/useRoom";
import { useGuest } from "../guests/useGuest";

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 3.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.4rem;
  color: var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const dummy = {
//   firstName: "Moha",
//   name: "001",
//   email: "anthony@gmail.com",
//   phone: "08197549375",
// };

function BookingDataBox({ booking, roomBooking }) {
  const {
    customerID,
    amount,
    isPaid,
    paymentMethod,
    isComplementary,
    CreatedAt,
    UpdatedAt,
  } = booking;

  const { numberOfNights, startDate, endDate, roomID } = roomBooking;

  const { isLoadingRoom, room } = useRoom(roomID);
  const { guest, isLoadingGuest } = useGuest(customerID);

  const { name } = room || {};
  const { firstName, lastName, email, phone } = guest || {};

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numberOfNights} nights in room{" "}
            <span>{!isLoadingRoom && name}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <Section>
        {!isLoadingGuest && (
          <Guest>
            <p>{firstName + " " + lastName}</p>
            <span>&bull;</span>
            <p>{email}</p>
            <span>&bull;</span>
            <p>{phone}</p>
          </Guest>
        )}

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(amount)}
          </DataItem>

          <p>{isPaid ? `Paid by ${paymentMethod}` : "Not Paid"}</p>
        </Price>
      </Section>

      <Footer>
        <div>
          {isComplementary && (
            <span style={{ fontStyle: "bold", fontWeight: 500 }}>
              This customer is complementary
            </span>
          )}
        </div>
        <p>
          Booked {format(new Date(CreatedAt), "EEE, MMM dd yyyy, p")} (Last
          Updated: {format(new Date(UpdatedAt), "EEE, MMM dd yyyy, p")})
        </p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;

import styled from "styled-components";
import { format } from "date-fns";
import { HiOutlineDocument, HiOutlineHomeModern } from "react-icons/hi2";
import { useGuestBookings } from "./useGuestBookings";

const StyledGuestDataBox = styled.section`
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

  & div {
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
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

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span {
    margin: 0 0.6rem;
  }
`;

function GuestDataBox({ guest }) {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    emergencyContact,
    plateNumber,
    CreatedAt,
    UpdatedAt,
    bookings,
  } = guest;

  const { guestBookings, isLoadingGuestBookings } = useGuestBookings();

  const carPlate = plateNumber || "No car parked in";

  return (
    <StyledGuestDataBox>
      <Header>
        <div>
          <HiOutlineDocument />
        </div>
        <p>
          Guest created on {format(new Date(CreatedAt), "EEE, MMM dd yyyy, p")}
        </p>
      </Header>

      <Section>
        <Guest>
          <p>{firstName + " " + lastName}</p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>{phone}</p>
        </Guest>
        <Guest>
          <p>
            <HiOutlineHomeModern />
          </p>
          <p>{address}</p>
          <span>&bull;</span>
          {(!isLoadingGuestBookings && !guestBookings === null) ||
          guestBookings?.length ? (
            <p>{guestBookings.length} booking(s) with Timeless</p>
          ) : (
            <p>No previous booking with Timeless</p>
          )}
        </Guest>
      </Section>

      <Footer>
        <p>
          Emergency Contact: {emergencyContact}
          <span>&bull;</span>
          {carPlate}
        </p>
        <p>Last Updated at {format(new Date(UpdatedAt), "EEE, MMM dd yyyy")}</p>
      </Footer>
    </StyledGuestDataBox>
  );
}

export default GuestDataBox;

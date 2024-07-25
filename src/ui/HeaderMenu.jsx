import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import AddBooking from "../features/bookings/AddBooking";
import ExportHeader from "../features/bookings/ExportHeader";
import { useUserDetails } from "../context/UserDetailsContext";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

// NB: The add booking here is actually used to add guest

function HeaderMenu() {
  const { userDetails } = useUserDetails();
  const navigate = useNavigate();

  const { isAdmin } = userDetails;

  return (
    <StyledHeaderMenu>
      <li>
        <AddBooking />
      </li>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      {isAdmin && (
        <li>
          <ExportHeader />
        </li>
      )}
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;

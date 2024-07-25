import styled from "styled-components";
import { useUserDetails } from "../../context/UserDetailsContext";
// import { useUser } from "../authentication/useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { userDetails } = useUserDetails();

  const { firstName, lastName, role } = userDetails || {};

  return (
    <StyledUserAvatar>
      <Avatar src="/default-user.jpg" alt={`Avatar of ${lastName}`} />
      <span>
        {firstName &&
          lastName &&
          role &&
          firstName + " " + lastName + " (" + role + ")"}
      </span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;

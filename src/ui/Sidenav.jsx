import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidenav = styled.aside`
  background-color: var(--color-grey-0);
  padding: 0 2.4rem 3.2rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

function Sidenav() {
  return (
    <StyledSidenav>
      <Logo />
      <MainNav />
    </StyledSidenav>
  );
}

export default Sidenav;

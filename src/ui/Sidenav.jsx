import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidenav = styled.aside`
  background-color: var(--clr-body-grey);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--clr-text-grey);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
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

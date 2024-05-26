import styled from "styled-components";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
      <p>Bookings</p>
      <p>Sales</p>
      <p>Chart</p>
      <p>Something else</p>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

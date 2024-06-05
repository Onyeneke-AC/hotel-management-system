import styled from "styled-components";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.4rem;
  margin-bottom: 20px;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <Stats />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;

import styled from "styled-components";
import Table from "../../ui/Table";
import { HiEllipsisVertical } from "react-icons/hi2";

const StyledText = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Number = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function UsersRow({ user }) {
  const { name, phone, email, emergencyContact, role } = user;

  return (
    <Table.Row>
      <StyledText>{name}</StyledText>
      <StyledText>{email}</StyledText>
      <Number>{phone}</Number>
      <StyledText>{role}</StyledText>
      <Number>{emergencyContact}</Number>

      <div>
        <HiEllipsisVertical />
      </div>
    </Table.Row>
  );
}

export default UsersRow;

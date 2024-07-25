import styled, { css } from "styled-components";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import SignupForm from "../authentication/SignupForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDeleteUser } from "./useDeleteUser";
import { useUserDetails } from "../../context/UserDetailsContext";

const StyledText = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";

  ${(props) =>
    props.type === "cap" &&
    css`
      text-transform: capitalize;
    `}
`;

const Number = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const StyledOther = styled.div`
  display: flex;
  justify-content: center;
`;

function UsersRow({ user }) {
  const { ID, firstName, lastName, phone, email, emergencyContact, role } =
    user;

  const { userDetails } = useUserDetails();

  const { role: currentUserRole } = userDetails;

  const { deleteUser, isDeletingUser } = useDeleteUser();

  return (
    <Table.Row>
      <StyledText type="cap">{firstName + " " + lastName}</StyledText>
      <StyledText>{email}</StyledText>
      <Number>{phone}</Number>
      <StyledText type="cap">{role}</StyledText>
      <Number>{emergencyContact}</Number>

      <StyledOther>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={ID} />

            <Menus.List id={ID}>
              <Modal.Open opens="edit-user">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              {currentUserRole.toLowerCase() === "owner" && (
                <Modal.Open opens="delete-user">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              )}
            </Menus.List>

            <Modal.Window name="edit-user">
              <SignupForm userToEdit={user} />
            </Modal.Window>

            {currentUserRole.toLowerCase() === "owner" && (
              <Modal.Window name="delete-user">
                <ConfirmDelete
                  resourceName="user"
                  disabled={isDeletingUser}
                  id={ID}
                  onConfirm={() => deleteUser(ID)}
                />
              </Modal.Window>
            )}
          </Menus.Menu>
        </Modal>
      </StyledOther>
    </Table.Row>
  );
}

export default UsersRow;

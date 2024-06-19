import styled from "styled-components";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import SignupForm from "../authentication/SignupForm";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDeleteUser } from "./useDeleteUser";

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

const StyledOther = styled.div`
  display: flex;
  justify-content: center;
`;

function UsersRow({ user }) {
  const { ID, firstName, lastName, phone, email, emergencyContact, role } =
    user;

  const { deleteUser, isDeletingUser } = useDeleteUser();

  return (
    <Table.Row>
      <StyledText>{firstName + " " + lastName}</StyledText>
      <StyledText>{email}</StyledText>
      <Number>{phone}</Number>
      <StyledText>{role}</StyledText>
      <Number>{emergencyContact}</Number>

      <StyledOther>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={ID} />

            <Menus.List id={ID}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Window name="edit">
                <SignupForm />
              </Modal.Window>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="user"
                disabled={isDeletingUser}
                id={ID}
                onConfirm={() => deleteUser(ID)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </StyledOther>
    </Table.Row>
  );
}

export default UsersRow;
